import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
/* --------------------------- CREATE CONTEXT --------------------------- */
const AppContext = createContext();

/* --------------------------- PROVIDER --------------------------- */
export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
  };

  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      // 🔥 SAVE TOKEN
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);

      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  /* --------------------------- STATIC DATA --------------------------- */
  const IconData = [
    { icon: "🎵", label: "Music Events" },
    { icon: "🎤", label: "Conferences" },
    { icon: "🎉", label: "Annual Celebrations" },
    { icon: "🎮", label: "Games" },
  ];

  /* --------------------------- STATE --------------------------- */
  const [events, setEvents] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch user data if token exists
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/auth/me", {
          credentials: "include",
        });

        if (!res.ok) return;

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  /* --------------------------- FETCH EVENTS --------------------------- */
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/events");
      const data = await res.json();

      setEvents(data);

      // 🔥 Extract ALL event reviews into ONE array
      const allReviews =
        data.flatMap((event) =>
          event.reviews?.map((review) => ({
            ...review,
            eventTitle: event.title,
            eventId: event._id,
          }))
        ) || [];

      setReviews(allReviews);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    } finally {
      setLoading(false);
    }
  };

  /* --------------------------- OPTIONAL: SINGLE EVENT REVIEWS --------------------------- */
  const getEventReviews = async (eventId) => {
    const res = await fetch(`/api/events/${eventId}/reviews`);
    return await res.json();
  };

  /* --------------------------- INITIAL LOAD --------------------------- */
  useEffect(() => {
    fetchEvents();
  }, []);

  /* --------------------------- PROVIDER --------------------------- */
  return (
    <AppContext.Provider
      value={{
        events,
        reviews,
        loading,
        fetchEvents,
        getEventReviews,
        IconData,
        navigate,
        login,
        logout,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/* --------------------------- HOOK --------------------------- */
export const useAppContext = () => {
  return useContext(AppContext);
};

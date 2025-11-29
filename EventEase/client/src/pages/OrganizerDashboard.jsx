// src/pages/OrganizerDashboard.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./OrganizerDashboard.css";

const OrganizerDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/events/${id}`, { method: "DELETE" });
    setEvents(events.filter(e => e._id !== id));
  };

  return (
    <div className="dashboard-page">
      <Navbar />
      <main className="dashboard-main">
        <h2>Your Organized Events</h2>
        <p>Create and manage all your campus events here.</p>

        <Link to="/create-event">
          <button className="dashboard-add-btn">+ Create New Event</button>
        </Link>

        <div className="dashboard-grid">
          {events.map(event => (
            <div className="dashboard-card" key={event._id}>
              <div className="dashboard-banner" style={{ backgroundImage: `url(${event.imageUrl})` }} />
              <div className="dashboard-card-body">
                <h3>{event.title}</h3>
                <p>{event.date} · {event.time}</p>
                <p>{event.venue}</p>
                <p className="desc">{event.description}</p>
              </div>
              <div className="dashboard-actions">
                <button className="dashboard-delete-btn" onClick={() => handleDelete(event._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrganizerDashboard;

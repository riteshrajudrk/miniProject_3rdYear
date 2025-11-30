// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EventDetail from "./pages/EventDetail";
import ContactPage from "./pages/ContactPage";
import Privacy from "./pages/Privacy";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import CreateEvent from "./pages/CreateEvent";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import AllEvents from "./pages/AllEvents";
import { AppProvider } from "./context/useAppContext";
const App = () => {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* simple events listing can be same as home */}
          <Route path="/events" element={<AllEvents />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />

          <Route path="/error" element={<ErrorPage />} />
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;

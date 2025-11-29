// src/pages/CreateEvent.jsx
import React, { useState } from "react";
import "./CreateEvent.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateEvent = () => {
  const [form, setForm] = useState({
    organizer: "Ritesh", 
    title: "",
    date: "",
    time: "",
    venue: "",
    description: "",
    imageUrl: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Event Created!");
  };

  return (
    <div className="create-event-page">
      <div className="page-hero">
        <Navbar />
        <div className="create-event-header">
          <h1>Organize a New Event</h1>
          <p>Fill details to publish your event on campus</p>
        </div>

        <form className="create-event-form" onSubmit={handleSubmit}>
          <div className="create-event-field">
            <label>Event Title*</label>
            <input name="title" onChange={handleChange} placeholder="Enter event title" />
          </div>

          <div className="create-event-field">
            <label>Date*</label>
            <input name="date" type="date" onChange={handleChange} />
          </div>

          <div className="create-event-field">
            <label>Time*</label>
            <input name="time" type="time" onChange={handleChange} />
          </div>

          <div className="create-event-field">
            <label>Venue*</label>
            <input name="venue" onChange={handleChange} placeholder="Enter venue" />
          </div>

          <div className="create-event-field">
            <label>Description*</label>
            <textarea name="description" onChange={handleChange} rows="4" placeholder="Write event description..." />
          </div>

          <div className="create-event-field">
            <label>Event Banner URL (optional)</label>
            <input name="imageUrl" onChange={handleChange} placeholder="Paste banner image URL" />
          </div>

          <button type="submit" className="create-event-submit">Publish Event</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreateEvent;

// src/components/EventsSection.jsx
import React, { useState } from "react";
import "./EventsSection.css";
import { useAppContext } from "../context/useAppContext";
import { Link } from "react-router-dom";

const EventsSection = ({ title, variant }) => {
  const { events, navigate } = useAppContext();
  const [activeTab, setActiveTab] = useState("latest");

  // ⭐ Today’s date
  const today = new Date();

  // ⭐ Step 1: Filter by variant (upcoming / past)
  const filterByVariant = () => {
    if (variant === "upcoming") {
      return events.filter(
        (e) => new Date(e.createdAt) > today // future events
      );
    }

    if (variant === "past") {
      return events.filter(
        (e) => new Date(e.createdAt) < today // old events
      );
    }

    return events;
  };

  // Base filtered list
  let variantFilteredEvents = filterByVariant();

  // ⭐ Step 2: Tabs logic (applied AFTER variant filter)
  const getFilteredEvents = () => {
    let events = [...variantFilteredEvents];

    if (activeTab === "weekdays") {
      events = events.filter((e) => e.category === "weekdays");
    } else if (activeTab === "popular") {
      events = events.sort((a, b) => b.likes - a.likes);
    } else if (activeTab === "latest") {
      events = events.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }

    return events.slice(0, 8); // Only top 8
  };

  const filteredEvents = getFilteredEvents();

  return (
    <section className="events">
      <div className="events-header">
        <h2>{title}</h2>

        {variant === "past" ? (
          ""
        ) : (
          <div className="events-tabs">
            <button
              className={`tab ${activeTab === "latest" ? "active" : ""}`}
              onClick={() => setActiveTab("latest")}
            >
              Latest
            </button>

            <button
              className={`tab ${activeTab === "weekdays" ? "active" : ""}`}
              onClick={() => setActiveTab("weekdays")}
            >
              Weekdays
            </button>

            <button
              className={`tab ${activeTab === "popular" ? "active" : ""}`}
              onClick={() => setActiveTab("popular")}
            >
              Popular
            </button>
          </div>
        )}
      </div>

      <div className="events-grid">
        {filteredEvents.length === 0 ? (
          <p className="no-events">No events found.</p>
        ) : (
          filteredEvents.map((event) => (
            <article
              onClick={() => navigate(`/events/${event._id}`)}
              className="event-card"
              key={event._id}
            >
              <div
                className="event-image"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className="event-body">
                <div className="event-date">
                  <span className="event-day">{event.date}</span>
                  <span className="event-month">{event.month}</span>
                </div>
                <div className="event-main">
                  <h3>{event.title}</h3>
                  <p className="event-location">{event.location}</p>
                  <p className="event-time">{event.time}</p>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="events-footer">
        <Link
          style={{ textDecoration: "none" }}
          to="/events"
          className="events-see-all"
        >
          See All Events
        </Link>
      </div>
    </section>
  );
};

export default EventsSection;

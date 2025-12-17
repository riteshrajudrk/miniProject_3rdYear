
            
            import React from "react";
import { useAppContext } from "../context/useAppContext";
import "./AllEvents.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const AllEvents = () => {
  const { events } = useAppContext();

  return (
    <div className="all-events-page">
      {/* ⭐ NAVBAR */}
      <div className="home-hero-wrapper-all-events">
        <Navbar />
      </div>

      {/* ⭐ ALL EVENTS GRID */}
      <div className="events-list-container">
        <h1>All Events 🎉</h1>

        <div className="events-grid">
          {events.map((event) => (
            <Link
              to={`/events/${event._id}`}
              key={event.id}
              className="event-card"
            >
              <div
                className="event-card-image"
                style={{ backgroundImage: `url(${event.image})` }}
              />

              <div className="event-card-body">
                <h3>{event.title} ⭐</h3>

                <p className="event-meta">📍 {event.location}</p>

                <p className="event-meta">🕒 {event.time}</p>

                <p className="event-meta">❤️ {event.likes} Likes</p>

                <p className="event-meta">📝 {event.reviews.length} Reviews</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;

            
           
            
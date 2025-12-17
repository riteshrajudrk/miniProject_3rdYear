import React, { useEffect, useState } from "react";
import "./EventDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsSection from "../components/EventsSection";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/useAppContext";

const EventDetail = () => {
  const { id } = useParams(); // Mongo _id (string)
  const { events, loading } = useAppContext();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (!events || events.length === 0) return;

    const foundEvent = events.find((e) => e._id === id);
    setEvent(foundEvent || null);
  }, [id, events]);

  if (loading || !event) {
    return (
      <div className="event-detail-page">
        <Navbar />
        <p style={{ textAlign: "center", marginTop: "3rem" }}>
          Loading event details...
        </p>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      <div className="page-hero event-detail-hero">
        <Navbar />

        <div className="event-detail-header">
          <div className="event-detail-cover">
            <div className="event-detail-logo">
              <img src={event.image} alt={event.title} />
            </div>

            <div className="event-detail-info">
              <h1>{event.title}</h1>
              <p>{event.description}</p>

              <p className="event-detail-meta">
                {event.date} {event.month} • {event.location} • {event.time}
              </p>

              <p className="event-detail-meta">
                Type : {event.eventType}
              </p>
            </div>
          </div>

          <div className="event-detail-side">
            <div className="event-detail-price-tag">
              {event.price > 0 ? `₹${event.price}` : "FREE"}
            </div>
            <button className="event-detail-btn">Register Now</button>
          </div>
        </div>
      </div>

      <main className="event-detail-main">
        <section className="event-detail-section">
          <h2>More Details</h2>
          <p>{event.longDescription}</p>
          <p><strong>Organizer:</strong> {event.organizer}</p>
          <p><strong>Process:</strong> {event.process}</p>
        </section>

        <section className="event-detail-section">
          <h2>Popular Events</h2>
          <EventsSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;

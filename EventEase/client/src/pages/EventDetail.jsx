import React, { use } from "react";
import "./EventDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EventsSection from "../components/EventsSection";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/useAppContext";
import { useState, useEffect } from "react";
const EventDetail = () => {
  const id = useParams().id;
  const { mockEvents } = useAppContext();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event details using the id if needed
    for (let event of mockEvents) {
      if (event.id === Number(id)) {
        setEvent(event);
      }
    }
  }, []);
  return (
    <div className="event-detail-page">
      <div className="page-hero event-detail-hero">
        <Navbar />
        <div className="event-detail-header">
          <div className="event-detail-cover">
            <div className="event-detail-logo">
              <img src={event?.image} alt={event?.title} />
            </div>
            <div className="event-detail-info">
              <h1>{event?.title}</h1>
              <p>{event?.description}</p>
              <p className="event-detail-meta">
                {event?.date} {event?.month} • {event?.location} • {event?.time}
              </p>
            </div>
          </div>

          <div className="event-detail-side">
            <div className="event-detail-price-tag">
              {event?.price > 0 ? `₹${event.price}` : "FREE"}
            </div>
            <button className="event-detail-btn">Register Now</button>
          </div>
        </div>
      </div>

      <main className="event-detail-main">
        <section className="event-detail-section">
          <h2>More Details</h2>
          <p>{event?.description}</p>

          <p>{event?.longDescription}</p>
          <p>{event?.organizer}</p>
          <p>{event?.process}</p>
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

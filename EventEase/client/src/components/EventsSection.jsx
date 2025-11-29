// src/components/EventsSection.jsx
import React from "react";
import "./EventsSection.css";

const mockEvents = [
  {
    id: 1,
    title: "Civil Pudura",
    date: "11",
    month: "SEP",
    time: "5:00 PM",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&w=800",
    location: "Civil Engineering Dept",
  },
  {
    id: 2,
    title: "Yaye Padura",
    date: "14",
    month: "SEP",
    time: "6:00 PM",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&w=800",
    location: "Chemical Dept",
  },
  {
    id: 3,
    title: "Spandana",
    date: "14",
    month: "SEP",
    time: "6:45 PM",
    image:
      "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&w=800",
    location: "Medical Faculty",
  },
  {
    id: 4,
    title: "Devthon",
    date: "14",
    month: "SEP",
    time: "All Day",
    image:
      "https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg?auto=compress&w=800",
    location: "CSE Dept",
  },
];

const EventsSection = ({ title, variant }) => {
  return (
    <section className="events">
      <div className="events-header">
        <h2>{title}</h2>
        <div className="events-tabs">
          <button className="tab active">Weekdays</button>
          <button className="tab">Popular</button>
          <button className="tab">Latest</button>
        </div>
      </div>

      <div className="events-grid">
        {mockEvents.map((event) => (
          <article className="event-card" key={event.id}>
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
        ))}
      </div>

      <div className="events-footer">
        <button className="events-see-all">
          See All Events
        </button>
      </div>
    </section>
  );
};

export default EventsSection;

// src/components/AddEventSection.jsx
import React from "react";
import "./AddEventSection.css";
import { Link, NavLink } from "react-router-dom";

const AddEventSection = () => {
  return (
    <section className="add-event">
      <div className="add-event-inner">
        <div className="add-event-illustration">
          {/* simple illustration placeholder */}
          <div className="add-event-avatar add-event-avatar--left" />
          <div className="add-event-avatar add-event-avatar--right" />
        </div>

        <div className="add-event-content">
          <h2>Add Your Loving Event</h2>
          <p>
            Promote your college fest, workshop or cultural night to all
            students in just a few clicks.
          </p>
          <NavLink to="/create-event">
            <button  className="add-event-btn">Organize Events</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AddEventSection;

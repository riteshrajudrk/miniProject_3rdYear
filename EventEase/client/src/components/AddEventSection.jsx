// src/components/AddEventSection.jsx
import React from "react";
import "./AddEventSection.css";
import { NavLink } from "react-router-dom";

const AddEventSection = () => {
  return (
    <section className="add-event">
      <div className="add-event-inner">

        {/* ✅ Modern image added without increasing size */}
        <div className="add-event-illustration">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="organize event"
            className="add-event-image"
          />
        </div>

        <div className="add-event-content">
          <h2>Add Your Loving Event</h2>
          <p>
            Promote your college fest, workshop or cultural night to all
            students in just a few clicks.
          </p>

          <NavLink to="/create-event" onClick={() => setTimeout(()=>{},100)}>
            <button className="add-event-btn">Organize Events</button>
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default AddEventSection;

// src/components/SearchBar.jsx
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <section className="searchbar">
      <div className="searchbar-inner">
        <div className="searchbar-input searchbar-input--search">
          <input type="text" placeholder="Search events..." />
        </div>

        <div className="searchbar-filters">
          <div className="searchbar-field">
            <span className="field-label">Date</span>
            <select>
              <option>Select Event Month</option>
              <option>January</option>
              <option>February</option>
            </select>
          </div>
          <div className="searchbar-field">
            <span className="field-label">Eventversity</span>
            <select>
              <option>Select Eventversity</option>
              <option>ABES</option>
              <option>AKTU</option>
            </select>
          </div>
          <div className="searchbar-field">
            <span className="field-label">Event</span>
            <select>
              <option>Select Event Type</option>
              <option>Technical</option>
              <option>Cultural</option>
              <option>Sports</option>
            </select>
          </div>

          <button className="searchbar-submit">Search</button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;

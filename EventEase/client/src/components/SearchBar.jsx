import React, { useState } from "react";
import "./SearchBar.css";
import { useAppContext } from "../context/useAppContext";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { events, loading } = useAppContext();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    title: "",
    month: "",
    type: "",
  });

<<<<<<< HEAD
  // Extract dynamic values
  const months = [...new Set(mockEvents.map((e) => e.month))];
  const types = [...new Set(mockEvents.map((e) => e.eventType))];
 const handleSearch = () => {
    // Clean search values
    const title = filters.title.toLowerCase().trim();
    const month = filters.month.toLowerCase().trim();
    const type = filters.type.toLowerCase().trim();

    // ⭐ FULL MATCH CHECK (title + month + type)
    const match = mockEvents.find((e) => {
      const eTitle = e.title.toLowerCase();
      const eMonth = e.month.toLowerCase();
      const eType = e.eventType.toLowerCase();

      const titleMatch = title ? eTitle.includes(title) : true;
      const monthMatch = month ? eMonth.includes(month) : true;
      const typeMatch = type ? eType.includes(type) : true;

      // all must match
      return titleMatch && monthMatch && typeMatch;
    });

    if (match) {
      navigate(`/events/${match.id}`);
      return;
    }

    // ⭐ If no direct match → go to results page
=======
  // ⛔ Prevent crash while events are loading
  if (loading || !events || events.length === 0) {
    return null;
  }

  // Extract dynamic values safely
  const months = [...new Set(events.map((e) => e.month))];
  const types = [...new Set(events.map((e) => e.eventType))];

  const handleSearch = () => {
    const title = filters.title.toLowerCase().trim();
    const month = filters.month.toLowerCase().trim();
    const type = filters.type.toLowerCase().trim();

    const match = events.find((e) => {
      const eTitle = e.title.toLowerCase();
      const eMonth = e.month?.toLowerCase() || "";
      const eType = e.eventType?.toLowerCase() || "";

      return (
        (title ? eTitle.includes(title) : true) &&
        (month ? eMonth.includes(month) : true) &&
        (type ? eType.includes(type) : true)
      );
    });

    if (match) {
      navigate(`/events/${match._id}`); // 🔥 MongoDB ID
      return;
    }

>>>>>>> RimjhimDev
    const q = new URLSearchParams(filters).toString();
    navigate(`/search-results?${q}`);
  };

  return (
    <section className="searchbar-wrapper">
      <div className="searchbar-pill">
        <div className="filters">

          <div className="filter-item">
            <label>EVENT NAME</label>
            <input
              type="text"
              value={filters.title}
              placeholder="Enter event name..."
              onChange={(e) =>
                setFilters({ ...filters, title: e.target.value })
              }
              className="search-input"
            />
          </div>

          <div className="filter-item">
            <label>MONTH</label>
            <select
              value={filters.month}
              onChange={(e) =>
                setFilters({ ...filters, month: e.target.value })
              }
            >
              <option value="">Select Month</option>
              {months.map((m, i) => (
                <option key={i} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="filter-item">
            <label>EVENT TYPE</label>
            <select
              value={filters.type}
              onChange={(e) =>
                setFilters({ ...filters, type: e.target.value })
              }
            >
              <option value="">Select Type</option>
              {types.map((t, i) => (
                <option key={i} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;

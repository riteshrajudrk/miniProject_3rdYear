import React, { useState } from "react";
import "./SearchBar.css";
import { useAppContext } from "../context/useAppContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { mockEvents } = useAppContext();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    title: "",
    month: "",
    type: "",
  });

  // Extract dynamic values
  const months = [...new Set(mockEvents.map((e) => e.month))];
  const types = [...new Set(mockEvents.map((e) => e.eventType))];
  const handleSearch = () => {
    // ⭐ PARTIAL TITLE MATCH (case-insensitive)
    if (filters.title.trim()) {
      const match = mockEvents.find((e) =>
        e.title.toLowerCase().includes(filters.title.toLowerCase().trim())
      );

      if (match) {
        navigate(`/events/${match.id}`);
        return;
      }
    }

    // ⭐ Otherwise → Go to search results with filters
    const q = new URLSearchParams(filters).toString();
    navigate(`/search-results?${q}`);
  };

  return (
    <section className="searchbar-wrapper">
      <div className="searchbar-pill">
        <div className="filters">
          {/* ⭐ TITLE SEARCH */}
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

          {/* MONTH */}
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
                <option key={i}>{m}</option>
              ))}
            </select>
          </div>

          {/* TYPE */}
          <div className="filter-item">
            <label>EVENT TYPE</label>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Select Type</option>
              {types.map((t, i) => (
                <option key={i}>{t}</option>
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

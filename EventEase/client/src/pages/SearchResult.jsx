import React from "react";
import { useAppContext } from "../context/useAppContext";
import { useLocation } from "react-router-dom";
import "./SearchResult.css";

const SearchResult = () => {
  const { mockEvents } = useAppContext();
  const { search } = useLocation();

  const params = new URLSearchParams(search);

  const month = params.get("month");
  const type = params.get("type");

  // Main filtering logic
  const filtered = mockEvents.filter((e) => {
    return (
      (!month || e.month === month) &&
      (!type || e.eventType === type) 
    );
  });

  return (
    <div className="results-page">
      <h2>Search Results</h2>

      {filtered.length === 0 ? (
        <p>No events match your search.</p>
      ) : (
        <div className="results-grid">
          {filtered.map((event) => (
            <div className="result-card" key={event.id}>
              <div
                className="result-img"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <p>{event.month} {event.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;

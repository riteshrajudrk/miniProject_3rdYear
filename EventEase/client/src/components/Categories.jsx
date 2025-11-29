// src/components/Categories.jsx
import React from "react";
import "./Categories.css";

const data = [
  { icon: "🎵", label: "Music Events" },
  { icon: "🎤", label: "Conferences" },
  { icon: "🎉", label: "Annual Celebrations" },
  { icon: "🎮", label: "Games" },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-inner">
        {data.map((item) => (
          <button className="category-pill" key={item.label}>
            <span className="category-icon">{item.icon}</span>
            <span className="category-label">{item.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;

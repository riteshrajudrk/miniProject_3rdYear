// src/components/Categories.jsx
import React from "react";
import "./Categories.css";
import { useAppContext } from "../context/useAppContext";

const Categories = () => {
  const { IconData } = useAppContext();
  return (
    <section className="categories">
      <div className="categories-inner">
        {IconData.map((item) => (
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

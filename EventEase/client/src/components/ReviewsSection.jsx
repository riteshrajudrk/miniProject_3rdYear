// src/components/ReviewsSection.jsx
import React from "react";
import "./ReviewsSection.css";
import { useAppContext } from "../context/useAppContext";

const ReviewsSection = () => {
  const { reviews } = useAppContext();
  return (
    <section className="reviews">
      <h2 className="reviews-title">Reviews About Us</h2>
      <p className="reviews-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <article className="review-card" key={review.id}>
            <div className="review-header">
              <div className="review-avatar">T</div>
              <div>
                <p className="review-name">{review.name}</p>
                <p className="review-role">{review.role}</p>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{review.text}</p>
          </article>
        ))}

        <article className="review-card review-card--add">
          <span className="review-add-plus">+</span>
          <p>Add Yours</p>
        </article>
      </div>

      <div className="reviews-footer">
        <button className="reviews-see-all">See All</button>
      </div>
    </section>
  );
};

export default ReviewsSection;

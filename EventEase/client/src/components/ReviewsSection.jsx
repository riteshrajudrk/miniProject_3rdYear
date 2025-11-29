// src/components/ReviewsSection.jsx
import React from "react";
import "./ReviewsSection.css";

const reviews = [
  {
    id: 1,
    name: "Taylor Swift",
    role: "Student, CSE",
    text: "Great way to discover events and never miss the important ones in campus.",
  },
  {
    id: 2,
    name: "Taylor Swift",
    role: "Club Coordinator",
    text: "Managing registrations became so simple. All data is in one place.",
  },
  {
    id: 3,
    name: "Taylor Swift",
    role: "Student, ECE",
    text: "Clean UI and easy event search. I love the reminders!",
  },
];

const ReviewsSection = () => {
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

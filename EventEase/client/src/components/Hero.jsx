// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-tag">Music Event • Workshop • Tech Fest</p>
          <h1 className="hero-title">Event Ease</h1>
          <p className="hero-subtitle">
            Stay updated with the latest academic talks, workshops and
            college events across Eventversities. Whether you are looking for
            fun or knowledge, there&apos;s always something happening.
          </p>

          <div className="hero-cta-group">
            <button className="hero-primary-btn">About Us</button>
            <button className="hero-secondary-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          {/* Placeholder card like the big banner in Figma */}
          <div className="hero-banner-card">
            <div className="hero-banner-image" />
            <div className="hero-banner-content">
              <h3>Mavisuru Ragasoba</h3>
              <p>World tour 2025 – Wander Girls World Tour, San Francisco.</p>
              <button className="hero-banner-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

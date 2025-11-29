import React from "react";
import "../index.css"; // for color variables if needed globally
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <Navbar />
        <div className="about-header">
          <h1>About EventEase</h1>
          <p>Your centralized college event management platform</p>
        </div>
      </div>

      <main className="about-main">
        <section className="about-card">
          <h2>Project Overview</h2>
          <p>
            EventEase is a smart event management system built as a 3rd-year mini project for college campuses.
            It simplifies event discovery, registration, and organization through a digital-first solution.
          </p>
        </section>

        <section className="about-card">
          <h2>Our Mission</h2>
          <p>
            To eliminate manual coordination, provide real-time event updates, and create a seamless communication
            channel between Admins, Organizers, and Students at ABES Engineering College.
          </p>
        </section>

        <section className="about-card">
          <h2>Key Features</h2>
          <ul>
            <li>📅 One-click event creation and scheduling</li>
            <li>🧾 Hassle-free student registrations</li>
            <li>🔔 Real-time announcements & dashboard updates</li>
            <li>📊 Centralized record tracking</li>
            <li>📱 Fully responsive UI</li>
          </ul>
        </section>

        <section className="about-card">
          <h2>Technology Used</h2>
          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </section>

        <section className="team-section">
          <h2>Team Members</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">R</div>
              <h3>Ritesh Kumar</h3>
              <p>Frontend & Backend Developer</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">T2</div>
              <h3>[Teammate 2]</h3>
              <p>UI/UX & Database Manager</p>
            </div>

            <div className="team-card">
              <div className="team-avatar">T3</div>
              <h3>[Teammate 3]</h3>
              <p>Backend Logic & API Testing</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

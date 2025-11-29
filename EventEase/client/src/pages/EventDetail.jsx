import React from "react";
import "./EventDetail.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventDetail = () => {
  return (
    <div className="event-detail-page">
      <div className="page-hero event-detail-hero">
        <Navbar />
        <div className="event-detail-header">
          <div className="event-detail-cover">
            <div className="event-detail-logo">EX</div>
            <div className="event-detail-info">
              <h1>EXMO 2025 – Tech Unleashed</h1>
              <p>
                The largest technological exhibition in Sri Lanka.
              </p>
              <p className="event-detail-meta">
                Eventversity of Moratuwa • 28 Oct 2025 • Colombo
              </p>
            </div>
          </div>

          <div className="event-detail-side">
            <div className="event-detail-price-tag">FREE</div>
            <button className="event-detail-btn">Register Now</button>
          </div>
        </div>
      </div>

      <main className="event-detail-main">
        <section className="event-detail-section">
          <h2>More Details</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis nisi ac mi pharetra facilisis. Cras cursus vehicula
            ullamcorper. Pellentesque sit amet nulla tempus, bibendum justo
            eget, blandit odio. 
          </p>
          <p>
            Nulla facilisi. Curabitur id ultricies velit. Suspendisse a orci
            orci. Integer scelerisque, arcu eget malesuada semper, lectus nibh
            porta felis, ac finibus urna magna non lorem.
          </p>
        </section>

        <section className="event-detail-section">
          <h2>Popular Events</h2>
          <div className="event-detail-popular-grid">
            <div className="event-detail-popular-card" />
            <div className="event-detail-popular-card" />
            <div className="event-detail-popular-card" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;

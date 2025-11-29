// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column footer-column-main">
          <h3 className="footer-logo">
            Event<span>Ease</span>
          </h3>
          <p>
            Events is a global self-service ticketing platform for live
            experiences that lets anyone create, share, find and attend events.
          </p>
          <div className="footer-social">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Plan Events</h4>
          <ul>
            <li>Create and Set Up</li>
            <li>Sell Tickets</li>
            <li>Online RSVP</li>
            <li>Online Events</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Eventick</h4>
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Help Center</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Stay in the Loop</h4>
          <p>Join our mailing list to stay in the loop with new events.</p>
          <button className="footer-subscribe">Subscribe Now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Event Events</p>
      </div>
    </footer>
  );
};

export default Footer;

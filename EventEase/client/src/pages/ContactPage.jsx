import React from "react";
import "./ContactPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-hero contact-hero">
        <Navbar />
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Any questions or remarks? Just write us a message.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p>We&apos;ll get back to you within 24 hours.</p>
            <ul>
              <li>📞 +91 123 456 7890</li>
              <li>✉ support@EventEase.com</li>
              <li>📍 ABES Engineering College, Ghaziabad</li>
            </ul>
          </div>

          <form className="contact-form">
            <div className="contact-grid">
              <div className="contact-field">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="contact-field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="contact-field">
                <label>Phone</label>
                <input type="text" placeholder="Enter phone number" />
              </div>
              <div className="contact-field">
                <label>Subject</label>
                <input type="text" placeholder="Select subject" />
              </div>
            </div>

            <div className="contact-field">
              <label>Message</label>
              <textarea rows="4" placeholder="Write your message..." />
            </div>

            <button className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;

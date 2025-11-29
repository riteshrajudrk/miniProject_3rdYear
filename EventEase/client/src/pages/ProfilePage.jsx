import React from "react";
import "./ProfilePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="page-hero profile-hero">
        <Navbar />
        <div className="profile-wrapper">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">R</div>
              <div className="profile-basic">
                <h2>Hello, Ritesh</h2>
                <p>Student · ABES Engineering College</p>
              </div>
              <button className="profile-edit-btn">Edit</button>
            </div>

            <div className="profile-grid">
              <div className="profile-field">
                <span className="label">Full Name</span>
                <span className="value">Ritesh Kumar</span>
              </div>
              <div className="profile-field">
                <span className="label">Email</span>
                <span className="value">ritesh@example.com</span>
              </div>
              <div className="profile-field">
                <span className="label">Phone</span>
                <span className="value">+91 98765 43210</span>
              </div>
              <div className="profile-field">
                <span className="label">Department</span>
                <span className="value">Computer Science</span>
              </div>
            </div>

            <button className="profile-logout-btn">Logout from Account</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;

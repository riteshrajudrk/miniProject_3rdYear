import React from "react";
import "./PrivacyPolicy.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="page-hero privacy-hero">
        <Navbar />
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
        </div>
      </div>

      <main className="privacy-main">
        <h2>Privacy Notice</h2>
        <p className="privacy-updated">Last updated [Date]</p>

        <p>
          This privacy notice for [Company Name] explains how and why we might
          collect, store, use, and/or share your information when you use our
          services.
        </p>

        <h3>Summary of Key Points</h3>
        <p>
          These key points summarize the most important parts of our privacy
          policy, but you can find more detail in each section below.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We may process personal information depending on how you interact with
          Event Events, the services, and the choices you make.
        </p>

        <h3>How We Use Your Information</h3>
        <p>
          We use your information to provide, improve, and administer our
          services, commEventcate with you, for security and fraud prevention, and
          to comply with law.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have questions, you may contact us at privacy@example.com.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

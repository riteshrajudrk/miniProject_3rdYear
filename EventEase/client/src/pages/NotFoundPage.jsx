import React from "react";
import "./ErrorPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="error-page">
      <div className="page-hero error-hero">
        <Navbar />
        <div className="error-content">
          <div className="error-illustration">404</div>
          <h1>Page Not Found</h1>
          <p>The page you are looking for doesn&apos;t exist.</p>
          <Link to="/" className="error-back-btn">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;

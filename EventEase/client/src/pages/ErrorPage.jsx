import React from "react";
import "./ErrorPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="page-hero error-hero">
        <Navbar />
        <div className="error-content">
          <h1>Error</h1>
          <p>
            Something went wrong while processing your request. Please try
            again, or contact support if the problem continues.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;

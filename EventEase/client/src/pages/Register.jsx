import React from "react";
import "./Register.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-page">
      <div className="page-hero">
        <Navbar />
        <div className="auth-wrapper">
          <div className="auth-text">
            <h1>Register Individual Account!</h1>
            <p>
              For the purpose of industry regulation, your details are required.
            </p>
          </div>

          <div className="auth-card">
            <form className="auth-form">
              <div className="auth-field">
                <label>Your fullname*</label>
                <input type="text" placeholder="Enter name here" />
              </div>
              <div className="auth-field">
                <label>Email address*</label>
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="auth-field">
                <label>Create password*</label>
                <input type="password" placeholder="Create password" />
              </div>
              <div className="auth-checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">I agree to terms &amp; conditions</label>
              </div>

              <button type="submit" className="auth-primary-btn">
                Register Account
              </button>

              <button type="button" className="auth-google-btn">
                Register with Google
              </button>

              <p className="auth-footer-text">
                Already have an Account? <Link to="/login">Click here to login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;

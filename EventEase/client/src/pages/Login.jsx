import React from "react";
import "./Login.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="page-hero">
        <Navbar />
        <div className="auth-wrapper">
          <div className="auth-text">
            <h1>Login Your Account</h1>
            <p>
              For the purpose of industry regulation, your details are required.
            </p>
          </div>

          <div className="auth-card">
            <form className="auth-form">
              <div className="auth-field">
                <label>Email address*</label>
                <input type="email" placeholder="Enter email address" />
              </div>
              <div className="auth-field">
                <label>Password*</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="auth-primary-btn">
                Login Account
              </button>

              <button type="button" className="auth-google-btn">
                Sign in with Google
              </button>

              <p className="auth-footer-text">
                Haven&apos;t an Account?{" "}
                <Link to="/register">Click here to Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;

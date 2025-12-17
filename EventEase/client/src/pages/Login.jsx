import React, { useState } from "react";
import "./Login.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppContext } from "../context/useAppContext";

const Login = () => {
  const { login , setUser } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // 🔥 REQUIRED
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
      return;
    }

    setUser(data.user);
    toast.success("Logged in successfully");
  };

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
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="auth-field">
                <label>Email address*</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="auth-field">
                <label>Password*</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="auth-primary-btn">
                Login Account
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

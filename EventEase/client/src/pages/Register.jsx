import React, { useState } from "react";
import "./Register.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    if (!agree) {
      toast.error("Please accept terms & conditions");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      toast.success("Account created successfully");
      navigate("/");
    } catch (err) {
      toast.error("Server error. Try again later.");
    }
  };

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
            <form className="auth-form" onSubmit={handleRegister}>
              <div className="auth-field">
                <label>Your fullname*</label>
                <input
                  type="text"
                  placeholder="Enter name here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                <label>Create password*</label>
                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="auth-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label htmlFor="terms">I agree to terms &amp; conditions</label>
              </div>

              <button type="submit" className="auth-primary-btn">
                Register Account
              </button>

              <p className="auth-footer-text">
                Already have an Account?{" "}
                <Link to="/login">Click here to login</Link>
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

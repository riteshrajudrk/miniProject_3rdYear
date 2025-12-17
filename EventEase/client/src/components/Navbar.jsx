import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAppContext } from "../context/useAppContext";
import avatar from "../assets/avatar.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAppContext();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <span className="navbar-logo-icon">🎟️</span>
          <span className="navbar-logo-text">
            Event<span>Ease</span>
          </span>
        </NavLink>

        {/* Center Links */}
        <nav className={`navbar-links ${isOpen ? "navbar-links--open" : ""}`}>
          <NavLink to="/events" onClick={() => setIsOpen(false)}>
            Events
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </nav>

        {/* Right Actions */}
        <div className="navbar-right">
          <NavLink to="/create-event">
            <button className="navbar-organize-btn">Organize Event</button>
          </NavLink>

          {!user ? (
            <NavLink to="/login">
              <button className="navbar-login-btn">Login</button>
            </NavLink>
          ) : (
            <div className="navbar-profile">
              <NavLink to="/profile">
                <img
                  src={avatar}
                  alt="profile"
                  className="navbar-avatar"
                />
              </NavLink>
              <button className="navbar-organize-btn" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Hamburger */}
        <button
          className={`navbar-toggle ${isOpen ? "navbar-toggle--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

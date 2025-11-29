import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-icon">🎟️</span>
          <span className="navbar-logo-text">
            Event<span>Ease</span>
          </span>
        </NavLink>

        {/* Links + only 1 login button (for mobile dropdown) */}
        <nav className={`navbar-links ${isOpen ? "navbar-links--open" : ""}`}>
          <NavLink to="/events" className="navbar-link" onClick={closeMenu}>Events</NavLink>
          <NavLink to="/about" className="navbar-link" onClick={closeMenu}>About</NavLink>
          <NavLink to="/blog" className="navbar-link" onClick={closeMenu}>Blog</NavLink>
          <NavLink to="/contact" className="navbar-link" onClick={closeMenu}>Contact</NavLink>
          <div className="navbar-actions">
  <NavLink to="/create-event">
    <button className="navbar-organize-btn">Organize Event</button>
  </NavLink>
  </div>

          {/* ✅ Only one login button placed here */}
          <NavLink to="/login" onClick={closeMenu}>
            <button className="navbar-login-btn">Login</button>
          </NavLink>
        </nav>

        {/* Hamburger for mobile */}
        <button
          className={`navbar-toggle ${isOpen ? "navbar-toggle--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/cd_logo.png";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Castle Design" className="navbar__logo" />
          <span className="navbar__brandname">Castle Design</span>
        </Link>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
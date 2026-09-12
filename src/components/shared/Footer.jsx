import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const GMAIL_ADDRESS = "castledbd@gmail.com"; // replace with your real address
const FACEBOOK_URL = "https://facebook.com/castledbd"; // replace with your real page

export default function Footer() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${GMAIL_ADDRESS}`;

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__brandname">Castle Design</span>
          <p className="footer__tagline">You Dream, We Build</p>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <Link to="/services">Residential Interior</Link>
          <Link to="/services">Commercial Interior</Link>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <Link to="/contact">Contact Us</Link>
          <a href={`mailto:${GMAIL_ADDRESS}`}>{GMAIL_ADDRESS}</a>
        </div>

        <div className="footer__social">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a href={gmailUrl} target="_blank" rel="noopener noreferrer" aria-label="Gmail">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 12 4 6.01V6h16zM4 18V8.24l8 6 8-6V18H4z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="footer__copy">
        © {new Date().getFullYear()} Castle Design. All rights reserved.
      </p>
      <a
        className="footer__developer"
        href="https://github.com/raiyan-noob"
        target="_blank"
        rel="noopener noreferrer"
      >
        Developed by raiyan-noob
      </a>
    </footer>
  );
}
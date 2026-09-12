import React from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import "./Services.css";
 
// Replace this with your actual Facebook Page username or numeric Page ID.
// Format: https://m.me/<page-username-or-id>
const FACEBOOK_MESSENGER_URL = "https://m.me/castledbd";
 
const SERVICES = [
  {
    key: "residential",
    title: "Residential",
    copy: "From thoughtful room refreshes to complete home transformations, we create warm, personal interiors designed around the way you live.",
    icon: "fa-regular fa-house",
    message: "I want to learn more about your residential projects"
  },
  {
    key: "commercial",
    title: "Commercial",
    copy: "From offices to hospitality spaces, we deliver polished, purposeful interiors that strengthen your brand and support the way your team works.",
    icon: "fa-regular fa-building",
    message: "I want to learn more about your commercial projects"
  },
];
 
export default function Services() {
  return (
    <>
      <Navbar />
      <section className="svc-section">
        <div className="svc-container">
          <h2 className="svc-heading">Services</h2>
          <p className="svc-subheading">
            From intimate homes to expansive commercial spaces, we shape
            thoughtful interiors that balance beauty, comfort, and everyday
            function.
          </p>

          <div className="svc-grid">
            {SERVICES.map((service) => (
              <div className="svc-card" key={service.key}>
                <div className="svc-icon" aria-hidden="true">
                  <i className={service.icon} />
                </div>
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-copy">{service.copy}</p>
                <a
                  className="svc-cta"
                  href={`${FACEBOOK_MESSENGER_URL}?text=${encodeURIComponent(service.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <svg
                    className="svc-cta-arrow"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10 H16 M11 5 L16 10 L11 15"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
 
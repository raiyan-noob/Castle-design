import React from "react";
import "./Services.css";

const SERVICES = [
  {
    title: "Residential Interior",
    icon: "fa-regular fa-house",
    description:
      "Thoughtfully designed homes that reflect your lifestyle — from cozy living rooms to full-home makeovers, crafted with comfort and elegance in mind.",
  },
  {
    title: "Commercial Interior",
    icon: "fa-regular fa-building",
    description:
      "Functional, brand-aligned spaces for offices, retail, and hospitality — designed to impress clients and elevate everyday workflow.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <p className="services__eyebrow">— Our Services</p>
        <h2 className="services__title">What We Offer</h2>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <div className="services__card" key={service.title}>
              <div className="services__icon" aria-hidden="true">
                <i className={service.icon} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
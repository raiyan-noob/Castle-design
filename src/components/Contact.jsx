import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import "./Contact.css";

const FACEBOOK_URL = "https://facebook.com/castledbd";
const EMAIL_ADDRESS = "castledbd@gmail.com";
const PHONE_DISPLAY = "+880 1641-834176";
const PHONE_NUMBER = "+8801641834176";
const WHATSAPP_NUMBER = "+8801641834176";
const MESSENGER_URL = "https://m.me/castledbd";
const PHONE_NUMBERS = [
  { value: PHONE_DISPLAY, href: `tel:${PHONE_NUMBER}` },
  { value: "+880 17 8170 9971", href: "tel:+8801781709971" },
  { value: "+880 17 11390807", href: "tel:+8801711390807" },
];

const CONTACT_CHANNELS = [
  {
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: "fa-brands fa-whatsapp",
    external: true,
  },
  {
    label: "Facebook",
    value: "Castle Design",
    href: `${FACEBOOK_URL}`,
    icon: "fa-brands fa-facebook-f",
    external: true,
  },
  {
    label: "Email us",
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: "fa-solid fa-envelope",
  },
];

const ADDRESSES = [
  {
    label: "Mirpur",
    value: "House# 1/1, Road# 4, Block# C, Section# 13, Mirpur, Dhaka-1216",
  },
  {
    label: "Bashundhara",
    value: "House# 1140, Road# 17, Block# I, Bashundhara R/A, Dhaka",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", query: "" });
  const [showPhoneNumbers, setShowPhoneNumbers] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const message = [
      `Name: ${form.name}`,
      `Contact Number: ${form.phone}`,
      `Email: ${form.email}`,
      `Query: ${form.query}`,
    ].join("\n");

    window.open(`${MESSENGER_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="contact-page">
      <Navbar />

      <main>
        <section className="contact-hero">
          <div>
            <p className="contact-kicker">Start a conversation</p>
            <h1>Let's design something remarkable together.</h1>
          </div>
          <p className="contact-hero__copy">
            Tell us what you are imagining. Share a few details and we will meet
            you in the Castle Design inbox.
          </p>
        </section>

        <section className="contact-layout">
          <div className="contact-form-panel">
            <div className="contact-heading">
              <p className="contact-kicker">Your project</p>
              <h2>Send us a message</h2>
              <p>Complete the form and it will open a pre-filled Messenger message.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label>
                  Name
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </label>
                <label>
                  Contact number
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </label>
              </div>
              <label>
                Email address
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </label>
              <label>
                How can we help?
                <textarea
                  required
                  name="query"
                  value={form.query}
                  onChange={handleChange}
                  placeholder="Tell us about your space, ideas, or project..."
                  rows="6"
                />
              </label>
              <button className="contact-submit" type="submit">
                Send to Messenger
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
            </form>
          </div>

          <aside className="contact-details">
            <div className="contact-details__top">
              <p className="contact-kicker">Find us here</p>
              <h2>Good spaces begin with a good conversation.</h2>
              <p>
                Prefer to reach out directly? Choose the channel that works best
                for you. We would love to hear about your next project.
              </p>
            </div>
            <div className="contact-channels">
              <div className={`contact-call${showPhoneNumbers ? " is-expanded" : ""}`}>
                <div className="contact-call__header">
                  <a className="contact-channel contact-call__link" href={PHONE_NUMBERS[0].href}>
                    <span className="contact-channel__icon" aria-hidden="true">
                      <i className="fa-solid fa-phone" />
                    </span>
                    <span>
                      <small>Call us</small>
                      <strong>{PHONE_NUMBERS[0].value}</strong>
                    </span>
                  </a>
                  <button
                    className="contact-call__toggle"
                    type="button"
                    aria-label={showPhoneNumbers ? "Hide additional phone numbers" : "Show additional phone numbers"}
                    aria-expanded={showPhoneNumbers}
                    aria-controls="contact-phone-options"
                    onClick={() => setShowPhoneNumbers((isVisible) => !isVisible)}
                  >
                    <i
                      className="fa-solid fa-chevron-down contact-channel__arrow contact-call__chevron"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                {showPhoneNumbers && (
                  <div className="contact-phone-options" id="contact-phone-options">
                    {PHONE_NUMBERS.slice(1).map((phone) => (
                      <a className="contact-phone-option" href={phone.href} key={phone.href}>
                        <span>{phone.value}</span>
                        <i className="fa-solid fa-phone" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  className="contact-channel"
                  href={channel.href}
                  key={channel.label}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                >
                  <span className="contact-channel__icon" aria-hidden="true">
                    <i className={channel.icon} />
                  </span>
                  <span>
                    <small>{channel.label}</small>
                    <strong>{channel.value}</strong>
                  </span>
                  <i className="fa-solid fa-arrow-up-right-from-square contact-channel__arrow" aria-hidden="true" />
                </a>
              ))}
            </div>
            <section className="contact-locations" aria-labelledby="contact-locations-title">
              <h3 id="contact-locations-title">Visit us</h3>
              <div className="contact-location-list">
                {ADDRESSES.map((address) => (
                  <a
                    className="contact-location"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.value)}`}
                    key={address.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-location__icon" aria-hidden="true">
                      <i className="fa-solid fa-location-dot" />
                    </span>
                    <span className="contact-location__copy">
                      <strong>{address.label}</strong>
                      <span>{address.value}</span>
                    </span>
                    <i className="fa-solid fa-arrow-up-right-from-square contact-location__arrow" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </section>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

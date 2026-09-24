import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCountUp from "../useCountUp";
import "./Hero.css";

const HERO_BACKGROUNDS = Object.entries(
  import.meta.glob("../../assets/hero-background/bg*.jpg", {
    eager: true,
    import: "default",
    query: "?url",
  })
)
  .sort(([firstPath], [secondPath]) => {
    const firstNumber = Number(firstPath.match(/bg(\d+)\.jpg$/)?.[1]);
    const secondNumber = Number(secondPath.match(/bg(\d+)\.jpg$/)?.[1]);
    return firstNumber - secondNumber;
  })
  .map(([, imageUrl]) => imageUrl);

const MESSENGER_USERNAME = "castledbd"; // replace with your real page username
const MEETING_TEXT = "I want to book a meeting";

const STATS = [
  { label: "Projects Completed", value: 50 },
  { label: "Happy Clients", value: 100 },
  { label: "Locations Served", value: 30 },
];

function Stat({ label, value }) {
  const [count, ref] = useCountUp(value);
  return (
    <div className="hero__stat" ref={ref}>
      <span className="hero__stat-number">{count}+</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [activeBackground, setActiveBackground] = useState(0);
  const messengerUrl = `https://m.me/${MESSENGER_USERNAME}?text=${encodeURIComponent(
    MEETING_TEXT
  )}`;
  const activeImage = HERO_BACKGROUNDS[activeBackground];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % HERO_BACKGROUNDS.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero" style={{ "--hero-image": `url(${activeImage})` }}>
      <div className="hero__content-panel">
        <div className="hero__content">
        <p className="hero__eyebrow">Castle Design</p>
        <h1 className="hero__title">
          Interior Design, <span>You Dream, We Build</span>
        </h1>
        <p className="hero__subtitle">
          From residential retreats to commercial spaces, we craft interiors
          that blend timeless elegance with modern function — tailored
          entirely around your vision.
        </p>

        <div className="hero__actions">
          <a
            href={messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--primary"
          >
            Book a 
          </a>
          <Link to="/contact" className="hero__btn hero__btn--secondary">
            Contact Us
          </Link>
        </div>

        <div className="hero__stats">
          {STATS.map((s) => (
            <Stat key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
        </div>
      </div>

      <div className="hero__image-panel" aria-hidden="true">
        {HERO_BACKGROUNDS.map((image, index) => (
          <img
            key={image}
            className={`hero__image ${index === activeBackground ? "hero__image--active" : ""}`}
            src={image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}
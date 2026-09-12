import React from "react";
import "./steps.css";
import stepsImage from "../../assets/steps.jpg";
 
const STEPS = [
  {
    number: "01",
    title: "Share Your Vision",
    copy:
      "Tell us about the space you're imagining. We start every project with a conversation, not a contract — your rooms, your land, your way of living.",
  },
  {
    number: "02",
    title: "Design & Plan",
    copy:
      "Our architects turn your ideas into drawings, then into a full plan — layout, materials, and budget — refined with you until every detail feels right.",
  },
  {
    number: "03",
    title: "Build & Deliver",
    copy:
      "Our crews break ground and build to the plan, with weekly updates so you always know what's happening. You get the keys the day it's finished.",
  },
];
 
export default function ThreeSteps() {
  return (
    <section className="cd-section">
      <div className="cd-container">
        <div className="cd-copy">
          <p className="cd-eyebrow">Castle Design</p>
          <h2 className="cd-heading">
            Building your dream
            <br />
            in three simple steps
          </h2>
 
          <ol className="cd-steps">
            {STEPS.map((step) => (
              <li className="cd-step" key={step.number}>
                <span className="cd-step-number">{step.number}</span>
                <div className="cd-step-body">
                  <h3 className="cd-step-title">{step.title}</h3>
                  <p className="cd-step-copy">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
 
        <div className="cd-visual">
          <img className="cd-blueprint" src={stepsImage} alt="Castle Design project steps" />
        </div>
      </div>
    </section>
  );
}
 
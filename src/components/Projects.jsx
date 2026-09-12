import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import "./Projects.css";

const PROJECT_ASSETS = import.meta.glob(
  "../assets/{finished_residential,finished_commercial}/*.{jpg,jpeg,png}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);


const PROJECT_GROUPS = [
  {
    category: "Residential",
    status: "Finished projects",
    projects: [
      { image: PROJECT_ASSETS["../assets/finished_residential/savar.jpg"], location: "Savar, Dhaka", post: "https://www.facebook.com/share/p/1D9cGZwS4A/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/uttara_sector14.jpg"], location: "Uttara Sector 14, Dhaka", post: "https://www.facebook.com/share/p/1EvPZTNQAr/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/aftabnagar.jpg"], location: "Aftabnagar, Dhaka", post: "https://www.facebook.com/share/p/18GfaTQKPM/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/baridhara.jpg"], location: "Baridhara, Dhaka", post: "https://www.facebook.com/share/p/1CF13urV4u/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/BRA.jpg"], location: "Bashundhara R/A, Dhaka", post: "https://www.facebook.com/share/p/1FPARkf32S/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/bra2.jpg"], location: "Bashundhara R/A, Dhaka", post: "https://www.facebook.com/share/p/1DEea47Ghj/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/mdpur.jpg"], location: "Mohammadpur, Dhaka", post: "https://www.facebook.com/share/p/1Ca6Bq3QxA/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/wari.jpg"], location: "Wari, Dhaka", post: "https://www.facebook.com/share/p/1KvwTusRJP/" },
      { image: PROJECT_ASSETS["../assets/finished_residential/rbazar.jpg"], location: "Rayerbazar, Dhaka", post: "https://www.facebook.com/share/p/183eZBNPX3/" },
    
    ],
  },
  {
    category: "Residential",
    status: "Ongoing projects",
    projects: [
    ],
  },
  {
    category: "Commercial",
    status: "Finished projects",
    projects: [
      { image: PROJECT_ASSETS["../assets/finished_commercial/uttara_sector4.jpg"], location: "Uttara Sector 4, Dhaka", post: "https://www.facebook.com/share/p/1LaGJc9r19/" },
    ],
  },
  {
    category: "Commercial",
    status: "Ongoing projects",
    projects: [
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img className="project-card__image" src={project.image} alt={`${project.location} project`} />
      <div className="project-card__shade" />
      <div className="project-card__location">
        <i className="fa-solid fa-location-dot" aria-hidden="true" />
        <span>{project.location}</span>
      </div>
      <a
        className="project-card__link"
        href={project.post}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View details about the project in ${project.location}`}
      >
        View details
        <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
      </a>
    </article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Residential");
  const [activeStatus, setActiveStatus] = useState("Finished projects");
  const activeGroup = PROJECT_GROUPS.find(
    (group) => group.category === activeCategory && group.status === activeStatus,
  );

  return (
    <div className="projects-page">
      <Navbar />

      <main>
        <section className="projects-hero">
          <p className="projects-kicker">Our portfolio</p>
          <h1>Spaces made to be lived in.</h1>
          <p>
            A selection of residential and commercial interiors shaped by
            thoughtful planning, expressive materials, and lasting detail.
          </p>
        </section>

        <section className="projects-content">
          <nav className="project-tabs" aria-label="Project categories">
            {["Residential", "Commercial"].map((category) => (
              <button
                className={`project-tabs__button ${activeCategory === category ? "is-active" : ""}`}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>

          <div className="project-status-tabs" aria-label={`${activeCategory} project status`}>
            {["Finished projects", "Ongoing projects"].map((status) => (
              <button
                className={`project-status-tabs__button ${activeStatus === status ? "is-active" : ""}`}
                key={status}
                type="button"
                onClick={() => setActiveStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>

          <section className="project-group">
            <div className="project-group__heading">
              <p className="projects-kicker">{activeCategory}</p>
              <h2>{activeStatus}</h2>
            </div>
            {activeGroup?.projects.length ? (
              <div className="project-grid">
                {activeGroup.projects.map((project) => (
                  <ProjectCard
                    key={`${activeCategory}-${activeStatus}-${project.image}-${project.location}`}
                    project={project}
                  />
                ))}
              </div>
            ) : (
              <p className="project-empty">No ongoing projects currently.</p>
            )}
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

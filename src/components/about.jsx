import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import "./about.css";

const INTERIOR_IMAGES = Object.values(
	import.meta.glob("../assets/hero-background/*.jpg", {
		eager: true,
		import: "default",
		query: "?url",
	}),
);

function getVisitImages() {
	const shuffled = [...INTERIOR_IMAGES].sort(() => Math.random() - 0.5);

	return {
		hero: shuffled[0],
		detail: shuffled[1],
		dining: shuffled[2],
	};
}

const MISSION_POINTS = [
	"Deliver exceptional interior design solutions tailored to each client's needs.",
	"Blend creativity with functionality to maximize every space.",
	"Maintain the highest standards of quality, professionalism, and integrity.",
	"Build lasting relationships through trust, transparency, and customer satisfaction.",
];

export default function About() {
	const [visitImages] = useState(getVisitImages);

	return (
		<div className="about-page">
			<Navbar />

			<main>
				<section className="about-hero">
					<div className="about-hero__image-wrap">
						<img
							className="about-hero__image"
							src={visitImages.hero}
							alt="Warm, contemporary living room interior"
						/>
					</div>
					<div className="about-hero__content">
						<p className="about-kicker">The Castle Design story</p>
						<h1>Designing dreams into spaces that feel like home.</h1>
						<p className="about-hero__summary">
							Creative direction, considered details, and interiors made for
							the way people truly live.
						</p>
					</div>
					<span className="about-hero__number">01</span>
				</section>

				<section className="about-intro">
					<div className="about-section-label">
						<span>About us</span>
						<span className="about-section-label__line" />
					</div>
					<div className="about-intro__copy">
						<h2>Spaces with character, crafted with intention.</h2>
						<div>
							<p>
								<strong>Castle Interior Design</strong> is a creative interior
								design firm dedicated to transforming residential, commercial,
								and hospitality spaces into functional, elegant, and inspiring
								environments. Guided by our slogan, <em>"Designing Dreams,"</em>
								we believe every space should reflect the personality, vision,
								and lifestyle of our clients.
							</p>
							<p>
								Our team combines creativity, technical expertise, and
								attention to detail to deliver innovative design solutions that
								balance aesthetics, comfort, and practicality. From concept
								development to project completion, we are committed to
								excellence in every detail.
							</p>
						</div>
					</div>
				</section>

				<section className="about-gallery">
					<div className="about-gallery__intro">
						<p className="about-kicker">Spaces in the making</p>
						<h2>Every detail has a reason.</h2>
						<p>
							We layer material, light, proportion, and purpose to create interiors
							that feel effortless and distinctly yours.
						</p>
					</div>
					<figure className="about-gallery__image about-gallery__image--large">
						<img src={visitImages.detail} alt="Refined interior with layered materials" />
					</figure>
					<figure className="about-gallery__image about-gallery__image--small">
						<img src={visitImages.dining} alt="Elegant dining space with warm lighting" />
					</figure>
				</section>

				<section className="about-values">
					<article className="about-value about-value--vision">
						<p className="about-value__eyebrow">02 / Our vision</p>
						<h2>Timeless spaces that inspire everyday living.</h2>
						<p>
							To become one of the most trusted and innovative interior design
							firms by creating timeless spaces that inspire people and enrich
							everyday living.
						</p>
					</article>

					<article className="about-value about-value--mission">
						<p className="about-value__eyebrow">03 / Our mission</p>
						<h2>Thoughtful design, from first sketch to final detail.</h2>
						<ul>
							{MISSION_POINTS.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</article>
				</section>

				<section className="about-signoff">
					<p className="about-kicker">Our point of view</p>
					<p className="about-signoff__quote">
						"A well-designed space does more than look beautiful. It gives
						life room to unfold."
					</p>
					<span>Castle Interior Design</span>
				</section>
			</main>

			<Footer />
		</div>
	);
}

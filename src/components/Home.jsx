import React from "react";
import Navbar from "./shared/Navbar";
import Hero from "./home/Hero";
import Services from "./home/Services";
import Footer from "./shared/Footer";
import ThreeSteps from "./home/steps";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ThreeSteps />
      <Footer />
    </>
  );
}
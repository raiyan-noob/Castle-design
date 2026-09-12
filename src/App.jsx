import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/about";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
import React from "react";
import About from "./Components/about";
import Contact from "./Components/contact";
import Navbar from "./Components/navbar";
import Projects from "./Components/projects";
import Skills from "./Components/skills";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font"> 
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

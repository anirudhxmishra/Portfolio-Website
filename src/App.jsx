import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Navbar />
          <Hero />
          <Experience />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
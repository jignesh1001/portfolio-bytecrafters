// src/components/Hero/Hero.jsx
import { scrollToSection } from "../../hooks/useScrollAnimation";
import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";
import Threads from "../Threads";

const Hero = () => {
  const handleCTAClick = () => {
    scrollToSection("projects");
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
  
      <div className="absolute inset-0 z-0">
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Threads amplitude={2} distance={0} enableMouseInteraction={true} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4 text-white">
          We are <span className="highlight">{personalInfo.name}</span>
        </h1>
        <p className="hero-title text-4xl md:text-6xl font-bold mb-4 text-white">
          {personalInfo.title}
        </p>

        <div className="hero-actions flex gap-4 ">
          <button className="btn btn-secondary" onClick={handleCTAClick}>
            View My Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center z-10">
        <div
          className="scroll-arrow cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

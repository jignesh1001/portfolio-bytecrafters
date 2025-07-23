// src/components/Hero/Hero.jsx
import { scrollToSection } from "../../hooks/useScrollAnimation";
import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";

const Hero = () => {
  const handleCTAClick = () => {
    scrollToSection("projects");
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            We are <span className="highlight">{personalInfo.name}</span>
          </h1>

          <p className="hero-subtitle">{personalInfo.title}</p>
          <div className="hero-actions">
            <button
              className="btn btn-secondary"
              onClick={handleCTAClick}
            >
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
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow" onClick={() => scrollToSection("about")}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

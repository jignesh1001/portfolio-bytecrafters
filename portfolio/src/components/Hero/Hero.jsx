// src/components/Hero/Hero.jsx
import { scrollToSection } from "../../hooks/useScrollAnimation";
import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";
import Galaxy from "../animation/galaxy/Galaxy.jsx";

const Hero = () => {
  const handleCTAClick = () => {
    scrollToSection("projects");
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Galaxy */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Galaxy />
        </div>
      </div>

      {/* Spline 3D Model - Full Width Background Layer */}
      <div className="absolute inset-0 z-5">
        <div className="h-full w-full relative">
          <div 
            className="absolute top-0 right-0 h-full spline-container"
            style={{ 
              width: '60%', // Takes 60% of screen width
              transform: 'translateX(10%)' // Shifts it slightly more to the right
            }}
          >
            <iframe
              src="https://my.spline.design/genkubgreetingrobot-oiasr8FGDgMMaAUVL3dOrgRN/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="w-full h-full"
              title="3D Robot Model"
            />
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-4">
        {/* Left Side - Hero Content */}
        <div className="w-full lg:w-1/2 text-white">
          <div className="max-w-lg">
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4 text-white">
              We are <span className="highlight">{personalInfo.name}</span>
            </h1>
            <p className="hero-title text-4xl md:text-6xl font-bold mb-8 text-white">
              {personalInfo.title}
            </p>

            <div className="hero-actions flex gap-4">
              <button className="btn btn-secondary" onClick={handleCTAClick}>
                See Work
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
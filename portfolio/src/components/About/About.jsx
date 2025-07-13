// src/components/About/About.jsx
import { personalInfo } from '../../data/portfolioData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>About Me</h2>
          <p>Passionate developer with a love for creating amazing digital experiences</p>
        </div>
        
        <div className="about-content">
          <div className="about-text slide-in-left">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
            
            <div className="about-actions">
              <a 
                href="/resume.pdf" 
                download
                className="btn btn-primary"
              >
                Download Resume
              </a>
              <a 
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Talk
              </a>
            </div>
          </div>
          
          <div className="about-image slide-in-right">
            <div className="image-container">
              <div className="image-placeholder">
                <span>Your Photo Here</span>
              </div>
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
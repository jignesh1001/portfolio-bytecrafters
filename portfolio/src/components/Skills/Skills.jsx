// src/components/Skills/Skills.jsx
import { skills } from '../../data/portfolioData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={skill.id} 
              className="skill-card scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">
                <span>{skill.icon}</span>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              
              <div className="skill-technologies">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
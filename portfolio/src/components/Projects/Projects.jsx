// src/components/Projects/Projects.jsx
import { projects } from "../../data/portfolioData";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Featured Projects</h2>
          <p>Some of my recent work and personal projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>

              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { projects } from "../../data/portfolioData";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section bg-black text-white">
      <div className="container">
        <div className="section-header fade-in text-center">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-300">Some of my recent work and personal projects</p>
        </div>

        <div className="projects-grid mt-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-in-up bg-neutral-900 text-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image rounded"
                />
              </div>

              <div className="project-details mt-4">
                <h3 className="project-title text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="project-description text-gray-300 mb-3">
                  {project.description}
                </p>

                <div className="project-technologies flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="tech-tag bg-gray-800 text-white px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links flex gap-3">
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

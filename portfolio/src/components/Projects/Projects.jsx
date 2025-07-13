// src/components/Projects/Projects.jsx
import { useState } from 'react';
import { projects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const handleLoadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Featured Projects</h2>
          <p>Some of my recent work</p>
        </div>

        <div className="projects-filter fade-in">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'featured' ? 'active' : ''}`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className="projects-grid fade-in">
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="projects-actions fade-in">
            <button 
              className="btn btn-primary load-more-btn"
              onClick={handleLoadMore}
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
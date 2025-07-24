import { personalInfo } from '../../data/portfolioData';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section fade-in items-center bg-white text-black">
      <div className="container flex flex-col items-center">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <p className="text-lg text-gray-700">
            Passionate developers with a love for creating amazing digital experiences
          </p>
        </motion.div>

        <div className="about-content max-w-3xl mt-8">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-800 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="about-stats grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 text-center">
              <div className="stat-item">
                <span className="stat-number text-3xl font-bold">3+</span>
                <span className="stat-label block text-sm text-gray-600">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-3xl font-bold">50+</span>
                <span className="stat-label block text-sm text-gray-600">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-3xl font-bold">20+</span>
                <span className="stat-label block text-sm text-gray-600">Happy Clients</span>
              </div>
            </div>

            <div className="about-actions flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <a href="/resume.pdf" download className="btn btn-secondary">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

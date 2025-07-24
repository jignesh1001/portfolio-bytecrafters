// src/components/About/About.jsx
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-black text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a team of developers passionate about crafting seamless web experiences. From interactive user interfaces to scalable backends, we believe in clean code, creative thinking, and constant evolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

// src/components/Contact/Contact.jsx
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Get in Touch</h2>
          <p>
            Whether you have a question or just want to say hi, feel free to
            drop a message!
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (you can connect this to a backend or script)");
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

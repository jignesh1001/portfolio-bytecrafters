// src/components/Contact/Contact.jsx
import { useState } from "react";
import { contactInfo } from "../../data/portfolioData";
import { socialLinks } from "../../data/portfolioData";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus(""), 5000);
    } catch (error) {
      setSubmitStatus(error);
      setTimeout(() => setSubmitStatus(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Get In Touch</h2>
          <p>Let's discuss your project or just say hello</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card scale-in">
              <div className="contact-header">
                <h3>Let's Work Together</h3>
                <p>
                  I'm always interested in hearing about new projects and
                  opportunities.
                </p>
              </div>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <span>📧</span>
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <span>📱</span>
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <span>📍</span>
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>{contactInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      title={link.platform}
                    >
                      <span>{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div> */}

              <div className="social-links my-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.platform}
                      className="text-gray-600 hover:text-white hover:underline transition-colors duration-300 p-2 rounded-full shadow-md"
                    >
                      <span className="text-xs">{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form scale-in" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project discussion, job opportunity, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or how I can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>📨</span>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === "success" ? (
                    <>
                      <span>✅</span>
                      Thank you! Your message has been sent successfully.
                    </>
                  ) : (
                    <>
                      <span>❌</span>
                      Sorry, there was an error sending your message. Please try
                      again.
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

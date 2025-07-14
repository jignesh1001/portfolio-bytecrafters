// src/components/Footer/Footer.jsx
import { contactInfo, socialLinks } from "../../data/portfolioData";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="container footer-container">
        <div className="footer-contact">
          <h4 className="footer-title">Contact</h4>
          <ul>
            <li>
              📧 <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              📱 <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </li>
            <li>📍 {contactInfo.location}</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4 className="footer-title">Follow Me</h4>
          <div className="footer-icons">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                title={link.platform}
              >
                <span>{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

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
        <div className="footer-contact">
          <h4 className="footer-title">Socials</h4>
          <ul>
            <li>
              <a href="">github</a>
            </li>
            <li>
              <a href="">instagram</a>
            </li>
            <li>
              {" "}
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} trioMinds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

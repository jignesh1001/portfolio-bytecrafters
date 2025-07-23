// src/components/Navigation/Navigation.jsx
import { useState } from 'react';
import { useScrollAnimation, scrollToSection } from '../../hooks/useScrollAnimation';
import { navigation } from '../../data/portfolioData';
import './Navigation.css';
import { personalInfo } from '../../data/portfolioData';

const Navigation = () => {
  const { scrolled } = useScrollAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')}>
            <p className="hero-subtitle">{personalInfo.name}</p>
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-links desktop-only">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

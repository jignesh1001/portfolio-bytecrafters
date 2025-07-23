// src/components/Navigation/Navigation.jsx

import { useState } from 'react';
import { scrollToSection, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { navigation, personalInfo } from '../../data/portfolioData';
import './Navigation.css';

const Navigation = () => {
  const { scrolled } = useScrollAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`custom-nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="custom-nav">
        <div className="nav-left">
          <span className="logo-icon">🧠</span>
          <span className="logo-text">{personalInfo.name}</span>
        </div>

        {/* Desktop Nav */}
        <ul className="nav-right desktop-only">
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

        {/* Hamburger Icon (Mobile Only) */}
        <div
          className={`hamburger mobile-only ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile Nav Menu */}
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

// src/components/Navigation/Navigation.jsx
import { useState } from 'react';
import { useScrollAnimation, scrollToSection } from '../../hooks/useScrollAnimation';
import { navigation } from '../../data/portfolioData';
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
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <a href="#home" onClick={() => handleNavClick('#home')}>
              Portfolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
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

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
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
      </div>
    </nav>
  );
};

export default Navigation;
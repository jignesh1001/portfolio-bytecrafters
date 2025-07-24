import { useState, useEffect } from 'react';
import { scrollToSection, useScrollAnimation } from '../../hooks/useScrollAnimation';
import { navigation, personalInfo } from '../../data/portfolioData';
import './Navigation.css';

const Navigation = () => {
  const { scrolled } = useScrollAnimation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Observe all sections: hero, about, projects, skills, contact
    const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Only about/projects should have black text
  const textShouldBeBlack = activeSection === 'about' || activeSection === 'projects';

  return (
    <nav
      className={`custom-nav-wrapper ${scrolled ? 'scrolled' : ''} ${
        textShouldBeBlack ? 'dark-text' : 'light-text'
      }`}
    >
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

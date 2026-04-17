import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cvData } from '../data/cvData';
import { generateCVPDF } from '../utils/generatePDF';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const downloadCV = () => {
    generateCVPDF(cvData);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-logo">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
          Anjan Karan
        </a>
      </div>
      
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" className={activeSection === 'home' ? 'active-link' : ''} onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active-link' : ''} onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active-link' : ''} onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active-link' : ''} onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active-link' : ''} onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active-link' : ''} onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
      </ul>

      <button className="nav-btn" onClick={downloadCV}>Download CV</button>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
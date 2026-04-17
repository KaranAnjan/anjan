import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowRight } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiMongodb } from 'react-icons/si';
import anjanImg from '../Assets/ANJAN.jpeg';
import { cvData } from '../data/cvData';
import { generateCVPDF } from '../utils/generatePDF';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    generateCVPDF(cvData);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="greeting">
            <span className="wave">👋</span> Hello, I'm
          </p>
          <h1>
            <span>Anjan Karan</span>
          </h1>
          <div className="tagline">
            <span>Software Developer</span>
          </div>
          <p className="description">
            A full-stack software developer with expertise in web applications, data analysis,
            and CRM/automation solutions. Specialized in Zoho ecosystem development including workflows,
            functions, custom creator apps, and advanced analytics. Turning complex problems into elegant,
            scalable solutions.
          </p>

          <div className="hero-buttons">
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
            >
              <FaDownload /> Download CV
            </motion.button>
            <motion.button 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
            >
              View Projects <FaArrowRight />
            </motion.button>
          </div>

          <div className="hero-social">
            <motion.a 
              href="https://github.com/anjankaran"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/anjankaran"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com/anjankaran"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
            >
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="hero-image-container">
            <div className="image-wrapper">
              <div className="image">
                <img src={anjanImg} alt="Anjan Karan" className="profile-image" />
              </div>
            </div>
            <div className="floating-icons">
              <motion.div 
                className="icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <SiReact size={30} color="#61DAFB" />
              </motion.div>
              <motion.div 
                className="icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <SiPython size={30} color="#3776AB" />
              </motion.div>
              <motion.div 
                className="icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <SiJavascript size={30} color="#F7DF1E" />
              </motion.div>
              <motion.div 
                className="icon"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                <SiMongodb size={30} color="#47A248" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
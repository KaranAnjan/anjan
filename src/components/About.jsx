import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section about" id="about">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About <span>Me</span>
        </motion.h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-content" ref={ref}>
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="about-image-wrapper">
            <div className="image-box">
              <div className="inner">
                <div className="avatar">👨‍💻</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Software Developer | Zoho Developer</h3>
          <p>
            Hi! I'm Anjan Karan, a dedicated software developer with a strong passion for building innovative 
            solutions. I specialize in full-stack web development, data analysis, and enterprise CRM/automation 
            solutions, combining these skills to create intelligent, scalable applications.
          </p>
          <p>
            My expertise spans across web technologies (React, Node.js, Python) and the complete Zoho ecosystem where I design 
            and develop Zoho functions, workflow automation, blueprints, custom creator applications, and advanced SQL analytics. 
            I've also built AI-powered tools and transformed complex datasets into actionable insights. My mission is to deliver 
            high-quality, production-ready solutions that drive business value.
          </p>

          <div className="about-info">
            <div className="about-info-item">
              <span>Name</span>
              <p>Anjan Karan</p>
            </div>
            <div className="about-info-item">
              <span>Status</span>
              <p>POST GRADUATED IN MBA</p>
            </div>
            <div className="about-info-item">
              <span>Email</span>
              <p>anjan@example.com</p>
            </div>
            <div className="about-info-item">
              <span>Location</span>
              <p>Kolkata, India</p>
            </div>
          </div>

          <div className="about-stats">
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.1 }}
            >
              <h4>10+</h4>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.1 }}
            >
              <h4>5+</h4>
              <p>Technologies</p>
            </motion.div>
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.1 }}
            >
              <h4>100%</h4>
              <p>Dedication</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
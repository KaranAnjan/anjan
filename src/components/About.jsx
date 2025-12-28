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
          <h3>A Passionate Developer & Data Analyst</h3>
          <p>
            Hi! I'm Anjan Karan, a recent graduate with a strong passion for technology 
            and innovation. I specialize in full-stack web development and data analysis, 
            combining these skills to build intelligent, data-driven applications.
          </p>
          <p>
            My journey in tech has led me to develop expertise in creating modern web 
            applications, building AI-powered tools like my audio transcription system, 
            and analyzing complex datasets to derive meaningful insights.
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
              <p>Kollkata, India</p>
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
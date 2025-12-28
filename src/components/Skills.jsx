import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';

const skillsData = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Tailwind CSS', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 82 },
    { name: 'Python', level: 88 },
    { name: 'Express.js', level: 80 },
    { name: 'REST APIs', level: 85 },
  ],
  dataAnalysis: [
    { name: 'Pandas', level: 90 },
    { name: 'NumPy', level: 85 },
    { name: 'SQL', level: 88 },
    { name: 'Power BI', level: 78 },
  ],
  tools: ['Git', 'Docker', 'VS Code', 'Jupyter', 'MongoDB', 'PostgreSQL', 'AWS', 'MSSQL'],
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section skills" id="skills">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span>Skills</span>
        </motion.h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-container" ref={ref}>
        <div className="skills-grid">
          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3><FaCode className="icon" /> Frontend Development</h3>
            {skillsData.frontend.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3><FaDatabase className="icon" /> Backend Development</h3>
            {skillsData.backend.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3><FaBrain className="icon" /> Data Analysis & AI</h3>
            {skillsData.dataAnalysis.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3><FaTools className="icon" /> Tools & Technologies</h3>
            <div className="tools-grid">
              {skillsData.tools.map((tool, index) => (
                <motion.div 
                  className="tool-item" 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaMicrophone, FaGlobe, FaChartBar, FaRobot, FaShoppingCart, FaCogs } from 'react-icons/fa';

const projectsData = [
  {
    title: 'Zoho CRM Workflow Automation',
    description: 'Built comprehensive workflow automation system in Zoho CRM with custom Deluge functions for lead scoring, automated follow-ups, and revenue forecasting. Integrated with Zoho Analytics for real-time pipeline visibility.',
    tags: ['Zoho CRM', 'Deluge', 'Workflows', 'Zoho Analytics', 'Automation'],
    icon: <FaCogs />,
    github: '#',
    live: '#',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Zoho Creator Custom App',
    description: 'Developed a feature-rich custom creator application for inventory management with Zoho Blueprint workflows, approval processes, and advanced SQL analytics for stock optimization.',
    tags: ['Zoho Creator', 'Blueprints', 'SQL', 'Custom App', 'Database'],
    icon: <FaCogs />,
    github: '#',
    live: '#',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'AI Audio Transcription System',
    description: 'A powerful audio transcription tool that converts speech from any language to English text with AI-powered summarization. Features real-time processing and high accuracy.',
    tags: ['Python', 'Whisper AI', 'NLP', 'FastAPI', 'React'],
    icon: <FaMicrophone />,
    github: '#',
    live: '#',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'Sales Analytics Dashboard',
    description: 'Interactive data visualization dashboard for analyzing sales trends, customer behavior, and revenue metrics using real-time data processing and advanced SQL queries.',
    tags: ['Python', 'Pandas', 'Plotly', 'Dash', 'SQL'],
    icon: <FaChartBar />,
    github: '#',
    live: '#',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product management, shopping cart, and secure payment integration with modern UI/UX.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: <FaShoppingCart />,
    github: '#',
    live: '#',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  {
    title: 'Portfolio Website Builder',
    description: 'A modern, responsive portfolio website template built with React. Features smooth animations, dark theme, fully customizable components, and professional design.',
    tags: ['React', 'Framer Motion', 'CSS3', 'Responsive'],
    icon: <FaGlobe />,
    github: '#',
    live: '#',
    gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section projects" id="projects">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span>Projects</span>
        </motion.h2>
        <p>Some of my recent work</p>
      </div>

      <div className="projects-grid" ref={ref}>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="project-image"
              style={{ background: project.gradient }}
            >
              <div className="project-icon">{project.icon}</div>
              <div className="project-overlay">
                <motion.a 
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href={project.live}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaExternalLinkAlt />
                </motion.a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
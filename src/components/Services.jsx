import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaChartLine, FaBrain, FaCloud, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Building modern, responsive, and performant web applications using React, Node.js, and other cutting-edge technologies.',
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analysis',
    description: 'Transforming raw data into actionable insights using Python, SQL, and visualization tools like Power BI and Tableau.',
  },
  {
    icon: <FaBrain />,
    title: 'AI/ML Solutions',
    description: 'Developing intelligent applications with machine learning, NLP, and computer vision capabilities.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Services',
    description: 'Deploying and managing scalable applications on cloud platforms like AWS, GCP, and Azure.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'API Development',
    description: 'Designing and building robust RESTful APIs and microservices for seamless application integration.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design',
    description: 'Creating efficient database architectures with PostgreSQL, MongoDB, and other database systems.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section services" id="services">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span>Services</span>
        </motion.h2>
        <p>What I can do for you</p>
      </div>

      <div className="services-grid" ref={ref}>
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
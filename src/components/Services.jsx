import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaChartLine, FaBrain, FaCloud, FaMobileAlt, FaDatabase, FaCogs } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Building modern, responsive, and performant web applications using React, Node.js, and other cutting-edge technologies.',
  },
  {
    icon: <FaCogs />,
    title: 'Zoho Developer Services',
    description: 'Specialized in Zoho ecosystem development - creating custom workflows, functions, blueprints, creator applications, and advanced SQL analytics to automate and streamline business processes.',
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analysis & Analytics',
    description: 'Transforming raw data into actionable insights using Python, SQL, Zoho Analytics, and visualization tools like Power BI and Tableau.',
  },
  {
    icon: <FaBrain />,
    title: 'AI/ML Solutions',
    description: 'Developing intelligent applications with machine learning, NLP, and computer vision capabilities to solve complex business problems.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & Integration Services',
    description: 'Deploying and managing scalable applications on cloud platforms like AWS, GCP, and Azure with seamless integrations.',
  },
  {
    icon: <FaDatabase />,
    title: 'API & Database Design',
    description: 'Designing efficient database architectures and building robust RESTful APIs for seamless application integration and data management.',
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
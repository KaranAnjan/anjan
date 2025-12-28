import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-title">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In <span>Touch</span>
        </motion.h2>
        <p>Let's work together</p>
      </div>

      <div className="contact-container" ref={ref}>
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's talk about everything!</h3>
          <p>
            Have a project in mind? Looking for a developer or data analyst? 
            Feel free to reach out. I'm always open to discussing new opportunities 
            and interesting projects.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="text">
                <span>Email</span>
                <p>karananjan7@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <FaPhone />
              </div>
              <div className="text">
                <span>Phone</span>
                <p>+91 7407437378</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="text">
                <span>Location</span>
                <p>India</p>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <motion.a href="#" whileHover={{ y: -5 }}>
              <FaGithub />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -5 }}>
              <FaLinkedin />
            </motion.a>
            <motion.a href="#" whileHover={{ y: -5 }}>
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message <FaPaperPlane />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
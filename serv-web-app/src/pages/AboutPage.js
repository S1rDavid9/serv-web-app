// AboutPage.js
import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";

const AboutPage = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <motion.div
          className="header-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="about-title">About SERV</h1>
          <div className="title-underline"></div>
          <p className="about-subtitle">Connecting Rwanda's Artisans with the World</p>
        </motion.div>
      </div>
      
      <div className="about-content">
        <motion.div
          className="about-section"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ delay: 0.2, ...fadeIn.transition }}
        >
          <h2>Our Story</h2>
          <p>
            SERV is dedicated to connecting people with skilled Rwandan artisans,
            ensuring easy access to quality craftsmanship. We aim to empower local
            artisans by giving them a platform to showcase their work and grow their
            businesses.
          </p>
        </motion.div>
        
        <motion.div
          className="mission-section"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ delay: 0.4, ...fadeIn.transition }}
        >
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To bridge the gap between artisans and customers, fostering a sustainable
              and thriving artisan economy in Rwanda.
            </p>
          </div>
          <div className="mission-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L5 12H19L12 22" stroke="#3b8a5e" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>
        
        <motion.div
          className="artisan-section"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ delay: 0.6, ...fadeIn.transition }}
        >
          <h2>Meet Our Artisans</h2>
          <div className="artisan-grid">
            <motion.div
              className="artisan-card"
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(59, 138, 94, 0.2)" }}
            >
              <div className="artisan-img-container">
                <img src="/assets/artisan1.jpeg" alt="Rwandan Artisan" />
              </div>
              <h3>Traditional Basketry</h3>
              <p>Expert weavers creating cultural symbols through beautiful baskets</p>
            </motion.div>
            
            <motion.div
              className="artisan-card"
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(59, 138, 94, 0.2)" }}
            >
              <div className="artisan-img-container">
                <img src="/assets/artisan2.jpeg" alt="Rwandan Artisan" />
              </div>
              <h3>Wood Carving</h3>
              <p>Skilled craftspeople transforming local wood into beautiful art</p>
            </motion.div>
            
            <motion.div
              className="artisan-card"
              whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(59, 138, 94, 0.2)" }}
            >
              <div className="artisan-img-container">
                <img src="/assets/artisan3.jpeg" alt="Rwandan Artisan" />
              </div>
              <h3>Textile Arts</h3>
              <p>Colorful fabrics and patterns reflecting Rwanda's vibrant culture</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          className="join-section"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ delay: 0.8, ...fadeIn.transition }}
        >
          <h2>Join Our Community</h2>
          <p>
            Support Rwandan artisans and become part of a movement that celebrates
            craftsmanship, culture, and economic empowerment.
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect With Artisans
          </motion.button>
        </motion.div>
      </div>
      
      <div className="image-consent">
        <p>
          📸 All images displayed on this site were taken with the artisans' consent
          to celebrate and promote their craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
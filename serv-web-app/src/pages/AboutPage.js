import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="about-container">
      <motion.h1 
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About SERV
      </motion.h1>

      <motion.p 
        className="about-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        SERV is dedicated to connecting people with skilled Rwandan artisans, ensuring easy access to quality craftsmanship. We aim to empower local artisans by giving them a platform to showcase their work and grow their businesses.
      </motion.p>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>To bridge the gap between artisans and customers, fostering a sustainable and thriving artisan economy in Rwanda.</p>
      </div>

      <div className="artisan-images">
        <h2>Meet Our Artisans</h2>
        <div className="image-grid">
          <motion.img src="/assets/artisan1.jpg" alt="Artisan 1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img src="/assets/artisan2.jpg" alt="Artisan 2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img src="/assets/artisan3.jpg" alt="Artisan 3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="image-consent">
        <p>
          📸 All images displayed on this site were taken with the artisans' consent to celebrate and promote their craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

import React from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Hero.css';

const Hero = () => {

  const particlesInit = async (main) => {
    await loadFull(main); // Ensures all particle features load
  };

  const particleOptions = {
    background: {
      color: '#121212' // Dark background for contrast
    },
    particles: {
      number: {
        value: 100, // Number of particles
      },
      size: {
        value: 3, // Particle size
      },
      color: {
        value: '#4CAF50', // Green particles for theme consistency
      },
      move: {
        enable: true,
        speed: 2, // Smooth particle movement
        direction: 'none',
        random: true,
      },
      links: {
        enable: true,
        color: '#ffd700', // Gold connecting lines for extra vibrancy
        distance: 150,
      }
    }
  };

   return (
        <motion.section 
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <Particles 
                id="tsparticles"
                init={particlesInit}
                options={particleOptions}
            />

            <div className="hero-content">
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Connecting Services to Solutions
                </motion.h1>

                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Your one-stop platform for trusted services.
                </motion.p>

                <motion.button 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="cta-button"
                >
                    Get Started
                </motion.button>
            </div>
        </motion.section>
    );
};

export default Hero;
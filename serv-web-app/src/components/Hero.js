import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {

  const particlesInit = async (engine) => {
    await loadFull(engine); // Ensures all particle features load
  };

  const particleOptions = {
    background: {
      color: 'linear-gradient(135deg, #4CAF50, #2E8B57)' // Dark background for contrast
    },
    particles: {
      number: {
        value: 200, // Number of particles
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
        enable: false,
        color: '#ffd700', // Gold connecting lines for extra vibrancy
        distance: 150,
      }
    }
  };

   return (
      <>
        {/* Background Image Section */}
        <div className="background-image">
        {/* <div className="auth-links">
            <Link to="/signin" className="auth-button">Log In</Link>
            <Link to="/signup" className="auth-button">Sign Up</Link>
        </div> */}
        <div className="typewriter-text">
                    <Typewriter
                        words={[
                            'Welcome to Serv',
                            'Connecting You to Trusted Artisans',
                            'Your One-Stop Service Platform'
                        ]}
                        loop={0} // 0 = infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </div>
        </div>

        {/* Hero Section with Particles*/}
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
                    Connecting Artisans to Users
                </motion.h1>

                <motion.p
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    Your one-stop platform for trusted services.
                </motion.p>

                <button className='fancybutton'>
                  <a href="#cta-section"><span>Get Started</span></a> 
                </button>
            </div>
        </motion.section>
    </>
    );
};

export default Hero;
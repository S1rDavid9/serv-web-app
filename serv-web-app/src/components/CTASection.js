import React from 'react';
import { motion } from 'framer-motion';
import './CTASection.css';

const CTASection = () => {
    return (
        <section id="cta-section" className="cta-section">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Transform Your Home with Trusted Experts!
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                Find reliable artisans — fast and easy!
            </motion.p>

            <button className='fancybutton'>
                  <a href="/signup"><span>Get Started Now</span></a> 
                </button>
        </section>
    );
};

export default CTASection;
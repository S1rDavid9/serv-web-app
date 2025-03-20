// import React from 'react';
// import { motion } from 'framer-motion';
// import './About.css';

// const About = () => {
//     return (
//         <motion.section 
//             className="about-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.5 }} 
//         >
//             <div className="about-content">
//                 <motion.div 
//                     className="about-text"
//                     initial={{ x: -100, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.3, duration: 1 }}
//                 >
//                     <h2>About Serv</h2>
//                     <p>
//                         Serv is dedicated to connecting individuals with skilled artisans 
//                         like plumbers, painters, electricians, and more. Our platform 
//                         ensures seamless access to trusted services right at your fingertips.
//                     </p>
//                     <motion.button 
//                         whileHover={{ scale: 1.1 }} 
//                         whileTap={{ scale: 0.9 }}
//                         className="cta-button"
//                     >
//                         Learn More
//                     </motion.button>
//                 </motion.div>

//                 <motion.div 
//                     className="about-image"
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                     viewport={{ once: true, amount: 0.5 }}
//                 >
//                     <img src="/assets/aboutserv.avif" alt="About Serv" className="about-image" />
//                     <img src="/assets/aboutserv2.jpg" alt="About Serv" className="about-image" />
//                     <img src="/assets/aboutserv1.jpg" alt="About Serv" className="about-image" />
                    
//                 </motion.div>
//             </div>
//         </motion.section>
//     );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <motion.section 
            className="about-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} 
        >
            <div className="about-content">
                <motion.div 
                    className="about-text"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <h2>About Serv</h2>
                    <p>
                        Serv is dedicated to connecting individuals with skilled artisans 
                        like plumbers, painters, electricians, and more. Our platform 
                        ensures seamless access to trusted services right at your fingertips.
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        className="cta-button"
                    >
                        Learn More
                    </motion.button>
                </motion.div>

                <div className="about-images-container">
                    {[  
                        "/assets/aboutserv.avif",
                        "/assets/aboutserv2.jpg",
                        "/assets/aboutserv1.jpg"
                    ].map((src, index) => (
                        <motion.img 
                            key={index}
                            src={src} 
                            alt={`About Serv ${index + 1}`} 
                            className="about-image"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
                            viewport={{ once: true, amount: 0.5 }}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default About;
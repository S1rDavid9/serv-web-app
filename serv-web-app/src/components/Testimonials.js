import React, { useState } from 'react';
import './Testimonials.css';
import { motion } from 'framer-motion';
import ReviewForm from './ReviewForm';

const initialTestimonialsData = [
    {
        name: "Jane Umutoni",
        review: "Serv connected me with a reliable plumber in no time. Fantastic service!",
        image: "/assets/portrait.jpg"
    },
    {
        name: "Josh Benard",
        review: "I was amazed at how easy it was to find an electrician through Serv. Highly recommend!",
        image: "/assets/portrait1.jpg"
    },
    {
        name: "Peter Niyonshuti",
        review: "Quick, reliable, and trustworthy. Serv made my home repairs stress-free!",
        image: "/assets/portrait2.jpg"
    },
    {
        name: "Esther Mutesi",
        review: "Finding a painter was a breeze with Serv. Excellent experience!",
        image: "/assets/portrait5.jpg"
    },
    {
        name: "Emmanuella Mwangi",
        review: "Highly professional and very fast. Would definitely use Serv again!",
        image: "/assets/portrait4.jpg"
    }
];

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(initialTestimonialsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const testimonialsPerPage = 2;

    
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    
    const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
    const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

   
    const handleAddReview = (newReview) => {
        setTestimonials([newReview, ...testimonials]);
        setCurrentPage(1); 
        setShowForm(false);
    };

    return (
        <section className="testimonials-section">
            <h2>What Our Users Say</h2>

            <div className="testimonials-container">
                {currentTestimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index} 
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <p className="testimonial-text">"{testimonial.review}"</p>
                        <h4 className="testimonial-name">- {testimonial.name}</h4>
                    </motion.div>
                ))}
            </div>

            <div className="pagination-controls">
                <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1} 
                    className="pagination-button"
                >
                    Prev
                </button>
                <button 
                    onClick={nextPage} 
                    disabled={indexOfLastTestimonial >= testimonials.length} 
                    className="pagination-button"
                >
                    Next
                </button>
            </div>

            {/* Toggle "Write a Review" Button */}
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cta-button"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? "Close Review Form" : "Write a Review"}
            </motion.button>

            {/* Conditionally Render Review Form */}
            {showForm && <ReviewForm onAddReview={handleAddReview} />}
        </section>
    );
};

export default Testimonials;
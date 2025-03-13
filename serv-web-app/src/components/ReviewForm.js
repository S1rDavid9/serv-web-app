import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onAddReview }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !review) {
            alert("Please fill in all fields.");
            return;
        }

        const newReview = {
            name,
            review,
            image: image || "/assets/default-avatar.png" // Default image for new reviews
        };

        onAddReview(newReview);

        // Clear the form fields
        setName('');
        setReview('');
        setImage('');
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <h3>Share Your Experience</h3>
            <input 
                type="text" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea 
                placeholder="Your Review" 
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Image URL (Optional)" 
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit" className="submit-btn">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
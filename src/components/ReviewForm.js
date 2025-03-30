import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onAddReview }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState(0); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !review || rating === 0) {
            alert("Please fill in all fields and provide a rating.");
            return;
        }

        const newReview = {
            name,
            review,
            image: image || "/assets/serv.png",
            rating 
        };

        onAddReview(newReview);

        setName('');
        setReview('');
        setImage('');
        setRating(0); // Reset rating
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

            {/* Star Rating Input */}
            <div className="rating-input">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span 
                        key={star} 
                        className={`star ${rating >= star ? 'filled' : ''}`} 
                        onClick={() => setRating(star)}
                    >
                        ★
                    </span>
                ))}
            </div>

            <button type="submit" className="submit-btn">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
import React, { useState, useEffect } from 'react';
import './BookingPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

const services = [
    'Plumbing', 'Painting', 'Electrical', 'Carpentry', 'Cleaning',
    'Gardening', 'Pest Control', 'Appliance Repair', 'Tiling', 'Roofing'
];

const BookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const preselectedService = queryParams.get('service');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: preselectedService || '',
        date: '',
        comments: '',
        successMessage: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.service && formData.name && formData.phone && formData.date) {
            setFormData({ 
                name: '',
                phone: '',
                service: '',
                date: '',
                comments: '',
                successMessage: `Booking confirmed for ${formData.service} on ${formData.date}. We will contact you shortly.` 
            });

            // Redirect back to the landing page after 5 seconds
            setTimeout(() => {
                navigate('/');
            }, 15000);
        } else {
            alert('Please fill in all required fields.');
        }
    };

    return (
        <div className="booking-page">
            {formData.successMessage ? (
                <div className="confirmation-message">
                    <p>{formData.successMessage}</p>
                </div>
            ) : (
                <>
                    <h1>Book a Service</h1>
                    <form onSubmit={handleSubmit} className="booking-form">
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                        <label>Phone Number:</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                        <label>Service:</label>
                        <select name="service" value={formData.service} onChange={handleChange} required>
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                            ))}
                        </select>

                        <label>Preferred Date:</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

                        <label>Additional Comments (Optional):</label>
                        <textarea name="comments" value={formData.comments} onChange={handleChange} />

                        <button type="submit" className="book-btn">Confirm Booking</button>
                    </form>
                </>
            )}
        </div>
    );
};

export default BookingPage;
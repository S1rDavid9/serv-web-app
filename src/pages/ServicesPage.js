import React from 'react';
import { FaTools, FaPaintRoller, FaBolt, FaHammer, FaLeaf, FaTruck, FaShieldAlt, FaWrench, FaFan, FaCar } from 'react-icons/fa';
import './ServicesPage.css';
import { useNavigate } from 'react-router-dom';

const services = [
    { id: 1, name: 'Plumbing', icon: <FaWrench />, description: 'Professional plumbing services for homes and offices.' },
    { id: 2, name: 'Painting', icon: <FaPaintRoller />, description: 'Interior and exterior painting services.' },
    { id: 3, name: 'Electrical', icon: <FaBolt />, description: 'Certified electricians for installations and repairs.' },
    { id: 4, name: 'Carpentry', icon: <FaHammer />, description: 'Custom woodworking and carpentry services.' },
    { id: 5, name: 'Landscaping', icon: <FaLeaf />, description: 'Creative and eco-friendly landscape designs.' },
    { id: 6, name: 'Moving Services', icon: <FaTruck />, description: 'Safe and reliable moving and relocation services.' },
    { id: 7, name: 'Security Systems', icon: <FaShieldAlt />, description: 'Home and office security installations.' },
    { id: 8, name: 'HVAC Services', icon: <FaFan />, description: 'Heating, ventilation, and air conditioning solutions.' },
    { id: 9, name: 'Car Repair', icon: <FaCar />, description: 'Professional car maintenance and repairs.' },
    { id: 10, name: 'General Repairs', icon: <FaTools />, description: 'All-purpose handyman and repair services.' }
];

const ServicesPage = () => {
    const navigate = useNavigate();

    const handleBooking = (serviceName) => {
        navigate(`/booking?service=${encodeURIComponent(serviceName)}`);
    };
    return (
        <div className="services-page">
            <h1>Our Services</h1>
            <div className="services-list">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <button 
                            className="book-now-btn" 
                            onClick={() => handleBooking(service.name)}
                        >
                            Book Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
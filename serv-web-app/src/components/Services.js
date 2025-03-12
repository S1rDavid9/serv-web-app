import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css';

const services = [
    { name: 'Plumber', icon: '🛠️', description: 'Expert in fixing leaks and installations.' },
    { name: 'Painter', icon: '🎨', description: 'Transform your space with vibrant colors.' },
    { name: 'Electrician', icon: '💡', description: 'Safe and professional electrical solutions.' },
    { name: 'Carpenter', icon: '🔨', description: 'Craftsmanship for furniture and fittings.' },
    { name: 'Mechanic', icon: '🚗', description: 'Reliable vehicle repair and maintenance.' },
    { name: 'Welder', icon: '⚒️', description: 'Expert metalwork and welding services.' },
    { name: 'Gardener', icon: '🌿', description: 'Lush landscaping and garden care.' },
    { name: 'Mason', icon: '🧱', description: 'Strong and durable building solutions.' },
  ];

  const Services = () => {
    return (
      <div className="services-section">
        <h2>Our Services</h2>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={1000}
          showThumbs={false}
          showStatus={false}
        >
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button className="book-btn">Book Now</button>
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

export default Services;
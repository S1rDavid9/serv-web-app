import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './ArtisanListPage.css';

const dummyArtisans = {
  'Plumbing': [
    { 
      id: 1, 
      name: "Mukamwiza Joselyne", 
      rating: 4.5, 
      profileImage: "/research1.jpg",
      address: '123 Kacyiru, Kigali', 
      number: "0785720245",
      experience: '10 years of experience in residential and commercial plumbing.' 
    },
    { 
      id: 2, 
      name: "Sikubwaho Aime", 
      rating: 4.8, 
      profileImage: "/images/jane.jpg", 
      address: '456 Nyamirambo, Kigali', 
      number: "0789245678",
      experience: 'Specializes in eco-friendly plumbing solutions for green buildings.' 
    }
  ],
  'Painting': [
    { 
      id: 3, 
      name: "Umutoni Uwase", 
      rating: 4.6, 
      profileImage: "/images/mike.jpg", 
      address: '789 Kimihurura, Kigali', 
      number: "0783456789",
      experience: '5 years of experience in interior and exterior painting.' 
    },
    { 
      id: 4, 
      name: "Kurama Benjamin", 
      rating: 4.9, 
      profileImage: "/images/rachel.jpg", 
      address: '321 Kabuye, Kigali', 
      number: "0784567890",
      experience: 'Expert in artistic wall murals and custom home painting.' 
    }
  ],
  'Electrical': [
    { 
      id: 5, 
      name: "Ngerageze Jean B", 
      rating: 4.2, 
      profileImage: "/images/tom.jpg", 
      address: '123 Remera, Kigali', 
      number: "0781234567",
      experience: '7 years of experience in electrical installations and repairs.' 
    },
    { 
      id: 6, 
      name: "Mukamana Emmanuel", 
      rating: 4.7, 
      profileImage: "/images/emma.jpg", 
      address: '456 Gikondo, Kigali', 
      number: "0782345678",
      experience: 'Specializes in commercial electrical systems and sustainable energy solutions.' 
    }
  ]
};

const ArtisanListPage = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    setArtisans(dummyArtisans[serviceName] || []);
  }, [serviceName]);

  return (
    <div className="artisan-list-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <h1>{serviceName} Artisans</h1>

      {artisans.length > 0 ? (
        <ul className="artisan-list">
          {artisans.map((artisan) => (
            <li key={artisan.id} className="artisan-card">
              <img src={artisan.profileImage} alt={artisan.name} className="artisan-img" />
              <div className="artisan-details">
                <span className="artisan-name">{artisan.name}</span>
                <span className="artisan-rating">⭐ {artisan.rating}</span>
                
              </div>
              <button 
                className="contact-btn"
                onClick={() => navigate(`/artisan/${artisan.id}`, { state: artisan })} // Pass artisan data to profile page
              >
                Contact
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-artisans">No registered artisans for this service yet.</p>
      )}
    </div>
  );
};

export default ArtisanListPage;
import { useLocation, useNavigate } from "react-router-dom";
import './ArtisanProfilePage.css';

const ArtisanProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const artisan = location.state; // Get artisan data from navigation

  if (!artisan) {
    return <p className="error-message">Artisan not found.</p>;
  }

  const handleBooking = () => {
    navigate(`/booking`, { state: { artisan } }); // Send artisan data to BookingPage
  };

  return (
    <div className="artisan-profile-page">
      <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
      <div className="profile-card">
        <img src={artisan.profileImage} alt={artisan.name} className="profile-img" />
        <h1>{artisan.name}</h1>
        <p className="artisan-rating">⭐ {artisan.rating} Rating</p>
        <p><strong>Experience:</strong> {artisan.experience}</p>
        <p><strong>Address:</strong> {artisan.address}</p>
        <p><strong>Phone:</strong> {artisan.number}</p>

        {/* Navigate to BookingPage with Artisan Data */}
        <button className="contact-btn" onClick={handleBooking}>
          Contact {artisan.name}
        </button>
      </div>
    </div>
  );
};

export default ArtisanProfilePage;
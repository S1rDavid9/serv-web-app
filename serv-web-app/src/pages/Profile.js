import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    gender: "",
    profilePicture: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/signin");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser({ ...user, profilePicture: reader.result }); // Save the image URL in the state
    };
    if (file) reader.readAsDataURL(file); // Read the file as a data URL
  };

  const handleUpdate = () => {
    localStorage.setItem("user", JSON.stringify(user)); // Save updated info
    toast.success("Profile updated successfully!", {
      onClose: () => navigate("/admin"),
  });
};

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2 className="profile-title">Edit Profile</h2>
        <div className="profile-picture">
          <img
            src={user.profilePicture || "https://via.placeholder.com/150"} // Use placeholder if no image is selected
            alt="Profile"
            className="profile-pic"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="profile-picture-input"
          />
        </div>
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
          className="profile-input"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="profile-input"
          placeholder="Email"
        />
        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
          className="profile-input"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button onClick={handleUpdate} className="profile-button">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
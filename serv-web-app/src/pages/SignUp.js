import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const userData = {
      fullName: formData.fullName,
      gender: formData.gender,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage

    toast.success(`Hello ${formData.fullName}, please sign in!`, {
      onClose: () => navigate("/signin"), // Redirect to homepage
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="signup-input"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="signup-input"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="signup-text">
          Already have an account?{" "}
          <Link to="/signin" className="signup-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
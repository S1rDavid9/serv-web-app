import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css"; 

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== formData.email || storedUser.password !== formData.password) {
      alert("Invalid email or password!");
      return;
    }

    alert("Sign in successful!");
    navigate("/admin"); // Redirect to the dashboard
  };


  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="signin-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="signin-input"
            required
          />
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p className="signin-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signin-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
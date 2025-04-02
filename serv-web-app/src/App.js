import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage'; 
import BookingPage from './pages/BookingPage';
import About from './components/About';
import AboutPage from './pages/AboutPage';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Testimonials />
              <CTASection />
            </>
          } />
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/aboutp" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} /> 
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<SignIn />} /> {/* Redirect unknown routes to Sign In */}

          {/* Auth Wrapper with Conditional Rendering */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
         {/* Toast Container */}
         <ToastContainer position="bottom-left" autoClose={3000} hideProgressBar={false} />
      </div>
    </Router>
  );
}

export default App;
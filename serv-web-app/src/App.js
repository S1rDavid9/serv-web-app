import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage'; 
import BookingPage from './pages/BookingPage';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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
          <Route path="/booking" element={<BookingPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                </div>

                <div className="footer-socials">
                    <a href="https://facebook.com"><FaFacebook /></a>
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="mailto:akachiworks11@gmail.com"><FaEnvelope /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Serv. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
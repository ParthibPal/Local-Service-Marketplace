import React from 'react';
import './ActualComponent_css/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h1>Local Service Marketplace</h1>
                </div>
                <div className="footer-links">
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/Local-Service-Marketplace/">Home</Link></li>
                            <li><Link to="/Local-Service-Marketplace/services">Services</Link></li>
                            <li><Link to="/Local-Service-Marketplace/customersupport">About Us</Link></li>
                            <li><Link to="/Local-Service-Marketplace/customersupport">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Information</h3>
                        <ul>
                            <li>Email: <a href="mailto:info@localservicemarketplace.com">info@localservicemarketplace.com</a></li>
                            <li>Phone: <a href="tel:+123456789">(123) 456-7890</a></li>
                            <li>Address: 113 Shibnarayan Road 712258 Market Street, City, State, ZIP</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <ul className="social-media">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Local Service Marketplace. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
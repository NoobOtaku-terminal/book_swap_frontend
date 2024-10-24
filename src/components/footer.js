import React from 'react';
import '../components_css/footer.css'; // You can adjust styles in this file
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* About Section */}
                <div className="footer-section about">
                    <h3>BOOKSWAP</h3>
                    <p>BOOKSWAP is a platform that allows users to exchange books with fellow book lovers. Share, swap, and discover new reads!</p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-phone"></i> +91 7908099399</p>
                    <p><i className="fas fa-phone"></i> +91 7908099399</p>
                    <p><i className="fas fa-envelope"></i> support@bookswap.com</p>
                </div>

                {/* Social Media Section */}
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF size={24} /> Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} /> Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} /> Instagram
                        </a>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} BOOKSWAP | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

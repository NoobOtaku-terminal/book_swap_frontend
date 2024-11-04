// ContactUs.js
import React, { useState, useEffect } from 'react';
import './contactus.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        message: '',
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to the server
        console.log('Form submitted:', formData);
    };

    const isFormValid = formData.firstName && formData.email && formData.message;

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h3>Get in Touch with Us</h3>
                <h1>Contact Book Swap</h1>
                <p>We’d love to hear from you!</p>
                <p><span role="img" aria-label="email">📧</span> hello@bookswap.com</p>
                <p><span role="img" aria-label="phone">📞</span> +91 7908099399</p>
                <p><span role="img" aria-label="location">📍</span> E-140 , Y3 IIT Jodhpur</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                    />
                </label>
                <button type="submit" disabled={!isFormValid} className='contact-button'>Submit</button>
                {/* {isFormValid && (
                    <button type="submit" className="contact-button">Submit</button>
                )} */}
            </form>
        </div>
    );
}

export default ContactUs;

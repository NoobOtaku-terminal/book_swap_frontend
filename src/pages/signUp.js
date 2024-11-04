// src/Signup.js
import React, { useState } from 'react';
import '../components_css/signup.css'; // Import CSS for styling

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // You can add further logic here, like API calls
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="header">Sign Up</div>
            <div className="inputs">
                <input
                    placeholder="Username"
                    className="input"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Email"
                    className="input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Password"
                    className="input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Location"
                    className="input"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />

                <div className="checkbox-container">
                    <label className="checkbox">
                        <input type="checkbox" required />
                    </label>
                    <label className="checkbox-text">I agree to the terms and conditions</label>
                </div>

                <button className="sigin-btn" type="submit">Create Account</button>

                <p className="signup-link">
                    Already have an account? <a href="/login">Sign in</a>
                </p>
            </div>
        </form>
    );
};

export default SignUp;

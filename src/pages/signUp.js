// src/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import '../components_css/signup.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.register(formData);
            console.log('Registration response:', response); // For debugging

            // Check if user data exists in the response
            if (response.user && response.token) {
                alert('Registration successful! Please login.');
                navigate('/login');
            } else {
                setError(response.message || 'Registration failed');
            }
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error('Registration error:', error);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="header">Sign Up</div>
            {error && <div className="error-message">{error}</div>}
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

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components_css/login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Placeholder for actual authentication logic (replace with API call)
        if (email === 'user@example.com' && password === 'password') {
            alert("Login successful!");
            localStorage.setItem('isAuthenticated', 'true');

            navigate('/myaccount');
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

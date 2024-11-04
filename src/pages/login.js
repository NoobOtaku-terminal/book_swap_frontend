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
        <div className='Container'>
            <form className="form">
                <div className='form-container'>
                <div className="header">Sign In</div>
                <div className="inputs">
                    <input placeholder="Email" className="input" type="text" />
                    <input placeholder="Password" className="input" type="password" />
                    <div className="checkbox-container">
                        <label className="checkbox">
                            <input type="checkbox" id="checkbox" />
                        </label>
                        <label htmlFor="checkbox" className="checkbox-text">Remember me</label>
                    </div>
                    <button onClick={()=>handleLogin} className="signin-btn1">Submit</button>
                    <a className="forget" href="#">Forget password?</a>
                    <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
                </div>
            </form>
        </div>

                );
};

                export default Login;

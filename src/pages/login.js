import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../components_css/login.module.css'; // Import CSS Module

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
        <div className={styles.Container}>
            <form className={styles.form}>
                <div className={styles['form-container']}>
                    <div className={styles['login-header']}>Sign In</div>
                    <div className={styles.inputs}>
                        <input placeholder="Email" className={styles.input} type="text" />
                        <input placeholder="Password" className={styles.input} type="password" />
                        <div className={styles['checkbox-container']}>
                            <label className={styles.checkbox}>
                                <input type="checkbox" id="checkbox" />
                            </label>
                            <label htmlFor="checkbox" className={styles['checkbox-text']}>Remember me</label>
                        </div>
                        <button onClick={handleLogin} className={styles['signin-btn']}>Submit</button>
                        <a className={styles.forget} href="#">Forget password?</a>
                        <p className={styles['signup-link']}>Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;

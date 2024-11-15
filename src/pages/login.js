import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import styles from '../components_css/login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await authService.login(formData);
            if (response.success) {
                navigate('/myaccount');
            }
        } catch (error) {
            setError(error.message || 'Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.Container}>
            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles['form-container']}>
                    <div className={styles['login-header']}>Sign In</div>
                    {error && <div className={styles.error}>{error}</div>}
                    <div className={styles.inputs}>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={styles.input}
                            type="email"
                            required
                        />
                        <input
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className={styles.input}
                            type="password"
                            required
                        />
                        <div className={styles['checkbox-container']}>
                            <label className={styles.checkbox}>
                                <input type="checkbox" id="checkbox" />
                            </label>
                            <label htmlFor="checkbox" className={styles['checkbox-text']}>Remember me</label>
                        </div>
                        <button
                            type="submit"
                            className={styles['signin-btn']}
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Submit'}
                        </button>
                        <a className={styles.forget} href="#">Forget password?</a>
                        <p className={styles['signup-link']}>Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
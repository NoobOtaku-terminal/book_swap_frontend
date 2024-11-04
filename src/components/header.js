import React from 'react';
import logo from '../assets/book.jpeg';
import '../components_css/search.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleAccount = () => {
        navigate('/myaccount');
    }

    const goHome = () => {
        navigate('/');
    }

    const isAuthenticated = localStorage.getItem('isAuthenticated');

    const handleLogin = () => {
        navigate('/login');  // Redirect to login page
    };


    return (
        <div className='glow-border' style={{ backgroundColor: '#2c2e40', padding: '1rem 4rem' }}> {/* Corrected padding */}
            <div className='d-flex justify-content-between align-items-center mx-4 '> {/* Use Bootstrap margin utility class */}
                <div onClick={goHome} className='d-flex justify-content-center align-items-center hover'>
                    <button style={{ border: 'none', borderRadius: "50%", backgroundColor: 'transparent' }}>
                        <img src={logo} alt="logo" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
                    </button>
                    <div className='henny-penny-regular'>BOOKMATE</div>
                </div>
                <div className='d-flex' >
                    <div className="ui-input-container" style={{ marginRight: '4rem' }}>
                        <input
                            required
                            placeholder="Type something..."
                            className="ui-input"
                            type="text"
                        />
                        <div className="ui-input-highlight"></div>
                        <div className="ui-input-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className='hover'>
                        {isAuthenticated ? (
                            // Display avatar button when logged in
                            <button
                                onClick={handleAccount}
                                style={{ border: 'none', borderRadius: '50%', backgroundColor: 'transparent' }}
                            >
                                <img
                                    src={logo} // Display user avatar when authenticated
                                    alt="User Avatar"
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                />
                            </button>
                        ) : (
                            // Display login button when not logged in
                            <button
                                onClick={handleLogin}
                                style={{ border: 'none', borderRadius: '50%', backgroundColor: 'transparent' }}
                            >
                                <img
                                    src={logo} // Display default avatar or login icon
                                    alt="Login"
                                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                />
                                {/* Or replace img with text */}
                                {/* <span>Login</span> */}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

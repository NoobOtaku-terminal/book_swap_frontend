import React, { useState } from 'react';
import logo from '../assets/book.jpeg';
import '../components_css/search.css';
import { useNavigate } from 'react-router-dom';
import { bookService } from '../services/api';

function Header() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

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

    const handleSignUp = () => {
        navigate('/signUp')
    }

    const handleSearch = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length >= 2) {
            setIsSearching(true);
            try {
                const response = await bookService.searchBooksByTitle(query);
                if (response.success) {
                    setSearchResults(response.data || []);
                } else {
                    setSearchResults([]);
                }
            } catch (error) {
                console.error('Search failed:', error);
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        } else {
            setSearchResults([]);
        }
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
                    <div className="ui-input-container" style={{ marginRight: '4rem', position: 'relative' }}>
                        <input
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search books..."
                            className="ui-input"
                            type="text"
                        />
                        {isSearching && <div className="search-loading">Searching...</div>}
                        {searchResults.length > 0 && (
                            <div className="search-results">
                                {searchResults.map((book) => (
                                    <div
                                        key={book._id}
                                        className="search-result-item"
                                        onClick={() => {
                                            navigate(`/book/${book._id}`);
                                            setSearchQuery('');
                                            setSearchResults([]);
                                        }}
                                    >
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = logo;
                                            }}
                                        />
                                        <div>
                                            <h4>{book.title}</h4>
                                            <p>{book.author}</p>
                                            {book.genre && <p className="book-genre">{book.genre}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="auth-buttons">
                        {isAuthenticated ? (
                            <button onClick={handleAccount} className="avatar-button">
                                <img src={logo} alt="User Avatar" className="avatar" />
                            </button>
                        ) : (
                            <div className="auth-options">
                                <button onClick={handleLogin} className="auth-button">Login</button>
                                <button onClick={handleSignUp} className="auth-button">SignUp</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

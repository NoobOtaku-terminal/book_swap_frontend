import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bookService } from '../services/api';
import '../components_css/category.css';
import bookImage from '../assets/image.png';
import { useNavigate } from 'react-router-dom';

function Category() {
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const handleBookClick = (bookId) => {
        navigate(`/book/${bookId}`);
    };
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const data = await bookService.getBooksByGenre(categoryName);
                setBooks(data);
            } catch (err) {
                console.log(err);
                setError('Failed to load books');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [categoryName]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="category-section">
            <header className="category-name">
                <h2>Category: {categoryName}</h2>
            </header>

            <main>
                <section className="book-list">
                    {books.map((book) => (
                        <div
                            className="card"
                            key={book._id}
                            onClick={() => handleBookClick(book._id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={book.image || bookImage} alt={`${book.title} cover`} style={{ height: '200px', width: '150px' }} />
                            <div className="book-info">
                                <h3 className="book-name clamp-text">{book.title}</h3>
                                <p className="author-name clamp-text">Author: {book.author}</p>
                                <button
                                    className="button"
                                    onClick={async () => {
                                        if (!localStorage.getItem('isAuthenticated')) {
                                            navigate('/login');
                                            return;
                                        }
                                        try {
                                            const response = await bookService.requestBorrow(book._id);
                                            if (response.success) {
                                                alert('Borrow request sent successfully!');
                                            } else {
                                                alert(response.message || 'Failed to request book');
                                            }
                                        } catch (error) {
                                            alert('Error requesting book');
                                        }
                                    }}
                                >
                                    Borrow
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Category;

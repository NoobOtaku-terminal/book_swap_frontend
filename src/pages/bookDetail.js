import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bookService, authService } from '../services/api';
import bookImage from '../assets/image.png';
import '../components_css/bookDetail.css';

const BookDetail = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
    const [owner, setOwner] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookAndOwnerDetails = async () => {
            try {
                const bookData = await bookService.getBookById(bookId);
                if (bookData) {
                    setBook(bookData);
                    // Fetch owner details if book has an owner
                    if (bookData.owner) {
                        const ownerResponse = await authService.getUserById(bookData.owner);
                        if (ownerResponse.success) {
                            setOwner(ownerResponse.data);
                        }
                    }
                } else {
                    setError('Failed to load book details');
                }
            } catch (err) {
                setError('Failed to load book details');
            } finally {
                setLoading(false);
            }
        };

        fetchBookAndOwnerDetails();
    }, [bookId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!book) return <div>Book not found</div>;

    const handleRequestSwap = async () => {
        if (!localStorage.getItem('isAuthenticated')) {
            navigate('/login');
            return;
        }

        try {
            const response = await bookService.requestBorrow(bookId);
            if (response.success) {
                alert('Swap request sent successfully!');
            } else {
                alert(response.message || 'Failed to send swap request');
            }
        } catch (error) {
            console.error('Error requesting swap:', error);
            alert('Failed to send swap request. Please try again.');
        }
    };

    return (
        <div className="book-detail-page">
            <div className="book-overview">
                <img
                    className="book-cover"
                    src={book.image || bookImage}
                    alt={`${book.title} cover`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = bookImage;
                    }}
                />
                <div className="book-info">
                    <h1>{book.title}</h1>
                    <h3>by {book.author}</h3>
                    {book.genre && <p><strong>Genre:</strong> {book.genre}</p>}
                    {book.condition && <p><strong>Condition:</strong> {book.condition}</p>}
                    {book.description && <p className="synopsis">{book.description}</p>}
                    <button
                        className="request-swap-btn"
                        onClick={handleRequestSwap}
                        disabled={!book.isAvailable}
                    >
                        {book.isAvailable ? 'Request to Swap' : 'Not Available'}
                    </button>
                </div>
            </div>

            <div className="book-metadata">
                <h3>Book Details</h3>
                <p><strong>Added:</strong> {new Date(book.createdAt).toLocaleDateString()}</p>
                {book.updatedAt && <p><strong>Last Updated:</strong> {new Date(book.updatedAt).toLocaleDateString()}</p>}
                <p><strong>Availability:</strong> {book.isAvailable ? 'Available' : 'Not Available'}</p>

                {/* Add owner information section */}
                {owner && (
                    <div className="owner-info">
                        <h4>Owner Information</h4>
                        <p><strong>Contact:</strong> {owner.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookDetail;

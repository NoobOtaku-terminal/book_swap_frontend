import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for dynamic routing
import '../components_css/BookDetail.css'
const BookDetail = () => {
    const { bookId } = useParams(); // Book ID from URL parameter for fetching the right book data

    // Placeholder data - replace with fetched data from API or state
    const book = {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        synopsis: "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
        owner: { name: "John Doe", location: "New York" },
        availability: "Available",
        publicationDate: "2018",
        isbn: "9780735211292",
        publisher: "Penguin",
        pageCount: 320,
        language: "English",
        condition: "Like New",
        similarBooks: [
            { title: "Deep Work", author: "Cal Newport" },
            { title: "Grit", author: "Angela Duckworth" }
        ],
    };

    const handleRequestSwap = () => {
        // Handle swap request logic here
        alert("Swap request sent!");
    };

    return (
        <div className="book-detail-page">
            <div className="book-overview">
                <img className="book-cover" src="/path/to/cover.jpg" alt={`${book.title} cover`} />
                <div className="book-info">
                    <h1>{book.title}</h1>
                    <h3>by {book.author}</h3>
                    <p><strong>Genre:</strong> {book.genre}</p>
                    <p><strong>Condition:</strong> {book.condition}</p>
                    <p className="synopsis">{book.synopsis}</p>
                    <button className="request-swap-btn" onClick={handleRequestSwap}>Request to Swap</button>
                </div>
            </div>

            <div className="owner-info">
                <h3>Owner Information</h3>
                <p><strong>Name:</strong> {book.owner.name}</p>
                <p><strong>Location:</strong> {book.owner.location}</p>
                <p><strong>Availability:</strong> {book.availability}</p>
            </div>

            <div className="book-metadata">
                <h3>Book Details</h3>
                <p><strong>Publication Date:</strong> {book.publicationDate}</p>
                <p><strong>ISBN:</strong> {book.isbn}</p>
                <p><strong>Publisher:</strong> {book.publisher}</p>
                <p><strong>Page Count:</strong> {book.pageCount}</p>
                <p><strong>Language:</strong> {book.language}</p>
            </div>

            <div className="similar-books">
                <h3>Similar Books</h3>
                <ul>
                    {book.similarBooks.map((similarBook, index) => (
                        <li key={index}>
                            <strong>{similarBook.title}</strong> by {similarBook.author}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BookDetail;

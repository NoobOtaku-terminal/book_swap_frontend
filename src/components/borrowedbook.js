import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../components_css/books.css';
import image from '../assets/image.png';
import { bookService } from '../services/api'; // Assuming bookService is properly configured

function Borrowedbook({ bookId, title, author, image: bookImage, genre, condition, onDeleteSuccess }) {
    if (!title || !author) {
        return null;
    }

    const handleDelete = async () => {
        try {
            const response = await bookService.deleteBook(bookId);
            if (response.success) {
                alert('Book removed successfully!');
                if (onDeleteSuccess) {
                    onDeleteSuccess(bookId); // Notify parent to update the book list
                }
            } else {
                alert(response.message || 'Failed to remove the book');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
            alert('An error occurred while trying to delete the book.');
        }
    };
    return (
        <div className="book-info-account">
            {/* Delete Button with Trashcan Icon */}
            <button
                className="delete-button-account"
                onClick={handleDelete}
                title="Delete Book"
                style={{ display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "column" }}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>

            <img
                src={bookImage || image}
                alt={`${title} cover`}
                className="book-image-account"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = image;
                }}
            />
            <div className="book-details-account">
                <h2 className="book-title-account">{title}</h2>
                <p className="book-author-account">Author: {author}</p>
                {genre && <p className="book-genre-account">Genre: {genre}</p>}
                {condition && <p className="book-condition-account">Condition: {condition}</p>}
            </div>
        </div>
    );
}

export default Borrowedbook;

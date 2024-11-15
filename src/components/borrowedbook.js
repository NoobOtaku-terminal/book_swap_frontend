import React from 'react'
import '../components_css/books.css'
import image from '../assets/image.png'

function Borrowedbook({ title, author, image: bookImage, genre, condition }) {
    if (!title || !author) {
        return null;
    }

    return (
        <div className="book-info-account">
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

export default Borrowedbook

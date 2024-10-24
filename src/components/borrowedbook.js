import React from 'react'
import '../components_css/books.css'
import image from '../assets/image.png'
function Borrowedbook({ title, author, borrowedDate, borrowedFrom }) {
    return (
        <div className="book-info">
            <img src={image} alt={`${title} cover`} className="book-image" />
            <div className="book-details">
                <h2 className="book-title">{title}</h2>
                <p className="book-author">Author: {author}</p>
                <p className="book-borrowed-date">Borrowed Date: {borrowedDate}</p>
                <p className="book-borrowed-from">Borrowed From: {borrowedFrom}</p>
            </div>
        </div>
    );
}

export default Borrowedbook

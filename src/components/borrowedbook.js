import React from 'react'
import '../components_css/books.css'
import image from '../assets/image.png'
function Borrowedbook({ title, author, borrowedDate, borrowedFrom }) {
    return (
        <div className="book-info-account">
            <img src={image} alt={`${title} cover`} className="book-image-account" />
            <div className="book-details-account">
                <h2 className="book-title-account">{title}</h2>
                <p className="book-author-account">Author: {author}</p>
                <p className="book-borrowed-date-account">Borrowed Date: {borrowedDate}</p>
                <p className="book-borrowed-from-account">Borrowed From: {borrowedFrom}</p>
            </div>
        </div>
    );
}

export default Borrowedbook

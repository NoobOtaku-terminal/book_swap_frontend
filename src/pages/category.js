import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../components_css/category.css';
import categoryData from '../assets/data';
import bookImage from '../assets/image.png'
function Category() {
    const { categoryName } = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = () => {
            const categoryDataItem = categoryData.find(cat => cat.name === categoryName);
            if (categoryDataItem) {
                setBooks(categoryDataItem.books);
            }
        };

        fetchBooks();
    }, [categoryName]);

    return (
        <div className="category-section">
            <header className="category-name">
                <h2>Category: {categoryName}</h2>
            </header>

            <main>
                <section className="book-list">
                    {books.length > 0 ? (
                        books.map((book, index) => (
                            <div className="card" key={index}>
                                <img src={bookImage} alt={`${book.title} cover`} />
                                <div className="book-info">
                                    <h3 className="book-name clamp-text">{book.title}</h3>
                                    <p className="author-name clamp-text">Author: {book.author}</p>
                                    <button className="button">Borrow</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No books found in this category.</p>
                    )}
                </section>
            </main>
        </div>
    );
}

export default Category;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../components_css/category.css';
import categoryData from '../assets/data';


function Category() {
    const { categoryName } = useParams(); // Get the category name from the URL
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = () => {
            const categoryDataItem = categoryData.find(cat => cat.name === categoryName);
            if (categoryDataItem) {
                setBooks(categoryDataItem.books);
            }
        };

        fetchBooks();
    }, [categoryName]); // Fetch books whenever the category changes

    return (
        <div>
            <header>
                <h1>Book Swap - Category: <span id="category-name">{categoryName}</span></h1>
            </header>

            <main>
                <section className="book-list" id="book-list">
                    {books.map((book, index) => (
                        <div className="book-item" key={index}>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Category;

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../components_css/slide.css'; // Import the new CSS file

import book from "../assets/image.png";

function Slide() {
  const categories = [
    {
      name: "Self-help",
      books: [
        { title: "Atomic Habits", author: "James Clear" },
        { title: "The Hidden Hindu", author: "Akshat Gupta" },
        { title: "Do It Today", author: "Darius Foroux" },
        { title: "The Courage to Be Disliked", author: "Ichiro Kishimi" },
        { title: "Don't Believe Everything You Think", author: "Joseph Nguyen" },
        { title: "The Power of Habit", author: "Charles Duhigg" },
        { title: "Grit", author: "Angela Duckworth" },
        { title: "Mindset", author: "Carol Dweck" },
        { title: "Deep Work", author: "Cal Newport" },
        { title: "The 5 AM Club", author: "Robin Sharma" }
      ],
    },
    {
      name: "Fiction",
      books: [
        { title: "Ikigai", author: "Hector Garcia" },
        { title: "The Mountain Is You", author: "Brianna Wiest" },
        { title: "The Alchemist", author: "Paulo Coelho" },
        { title: "The Night Circus", author: "Erin Morgenstern" },
        { title: "Dune", author: "Frank Herbert" },
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "Brave New World", author: "Aldous Huxley" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
      ],
    },
    {
      name: "Science",
      books: [
        { title: "Sapiens", author: "Yuval Noah Harari" },
        { title: "The Selfish Gene", author: "Richard Dawkins" },
        { title: "A Brief History of Time", author: "Stephen Hawking" },
        { title: "The Gene", author: "Siddhartha Mukherjee" },
        { title: "Cosmos", author: "Carl Sagan" },
        { title: "The Immortal Life of Henrietta Lacks", author: "Rebecca Skloot" },
        { title: "The Order of Time", author: "Carlo Rovelli" },
        { title: "The Emperor of All Maladies", author: "Siddhartha Mukherjee" },
        { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn" },
        { title: "Homo Deus", author: "Yuval Noah Harari" }
      ],
    }
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-name">{category.name}</h2>
          <Splide options={{
            perPage: 7, // Show 4 slides per row by default (for large screens)
            perMove: 1,
            gap: '1.5rem', // Space between the cards
            breakpoints: {

              1440: {
                perPage: 5,
                gap: '1.2rem',
              },
              1024: {
                perPage: 4,
                gap: '1.2rem',
              },
              1200: {
                perPage: 3,
                gap: '1.2rem',
              },
              800: {
                perPage: 2,
                gap: '1rem',
              },
              600: {
                perPage: 1,
                gap: '0.8rem',
              },
            },
          }}>
            {category.books.map((bookInfo, idx) => (
              <SplideSlide key={idx}>
                <div className="card">
                  <img src={book} alt="Book" />
                  <div className="book-info">
                    <h3 className="book-name clamp-text" >{bookInfo.title}</h3>
                    <p className="author-name">{bookInfo.author}</p>
                    <button className="button">Borrow</button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      ))}
    </div>
  );
}

export default Slide;

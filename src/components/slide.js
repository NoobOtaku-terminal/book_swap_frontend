import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../components_css/slide.css'; // Import the new CSS file
import  categories  from '../assets/data';
import book from "../assets/image.png";

function Slide() {
  // categories 
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

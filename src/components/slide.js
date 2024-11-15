import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../components_css/slide.css';
import { bookService } from '../services/api';
import defaultBookImage from "../assets/image.png";
import { useNavigate } from 'react-router-dom';

function Slide() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const genres = ["Fiction", "Non-Fiction", "Science and Technology", "History and Philosophy", "Health"];

  useEffect(() => {
    const fetchAllGenres = async () => {
      try {
        const categoriesData = await Promise.all(
          genres.map(async (genre) => {
            const books = await bookService.getBooksByGenre(genre);
            return {
              name: genre,
              books: books
            };
          })
        );
        setCategories(categoriesData);
      } catch (err) {
        console.log(err);
        setError('Failed to load books');
      } finally {
        setLoading(false);
      }
    };

    fetchAllGenres();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="slide-category-name">{category.name}</h2>
          <Splide options={{
            perPage: 7,
            perMove: 1,
            gap: '1.5rem',
            breakpoints: {
              1440: { perPage: 5, gap: '1.2rem' },
              1024: { perPage: 4, gap: '1.2rem' },
              1200: { perPage: 3, gap: '1.2rem' },
              800: { perPage: 2, gap: '1rem' },
              600: { perPage: 1, gap: '0.8rem' },
            },
          }}>
            {category.books.map((book, idx) => (
              <SplideSlide key={idx}>
                <div className="card">
                  <img
                    src={book.image || defaultBookImage}
                    alt={book.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultBookImage;
                    }}
                    style={{ height: '200px', width: '150px' }}
                  />
                  <div className="book-info">
                    <h3 className="book-name clamp-text">{book.title}</h3>
                    <p className="author-name clamp-text">{book.author}</p>
                    <button
                      className="button"
                      onClick={() => navigate(`/book/${book._id}`)}
                    >
                      View Details
                    </button>
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
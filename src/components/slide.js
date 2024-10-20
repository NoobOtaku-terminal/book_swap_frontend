import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import styled from "styled-components";

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
        <CategorySection key={index}>
          <CategoryName>{category.name}</CategoryName>
          <Splide options={{
            perPage: 4,
            perMove: 1,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}>
            {category.books.map((bookInfo, idx) => (
              <SplideSlide key={idx}>
                <Card>
                  <img src={book} alt="Book" />
                  <BookInfo>
                    <BookName>{bookInfo.title}</BookName>
                    <AuthorName>{bookInfo.author}</AuthorName>
                    <Button>Borrow</Button>
                  </BookInfo>
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        </CategorySection>
      ))}
    </div>
  );
}

// Styled components
const CategorySection = styled.div`
  margin-bottom: 3rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

const CategoryName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: left; /* Left indented */
  padding-left: 1rem;
`;

const Card = styled.div`
  width: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin-bottom: 1rem;
  }
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookName = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333;
`;

const AuthorName = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const Button = styled.button`
  background-color: #ff4b2b;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    background-color: #ff1e1e;
  }
`;

export default Slide;

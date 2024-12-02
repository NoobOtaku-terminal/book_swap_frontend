import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { bookService, authService } from '../services/api';
import Borrowedbook from './borrowedbook';

function DrawerMyAccount() {
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [userInfo, setUserInfo] = useState(null);
  const [userBooks, setUserBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    condition: '',
    description: '',
    image: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const profileResponse = await authService.getUserProfile();
        if (profileResponse.success && profileResponse.data) {
          setUserInfo(profileResponse.data);

          if (profileResponse.data.books && profileResponse.data.books.length > 0) {
            const bookIds = profileResponse.data.books;
            const booksData = await Promise.all(
              bookIds.map(async (bookId) => {
                try {
                  return await bookService.getBookById(bookId);
                } catch (error) {
                  console.error(`Failed to fetch book ${bookId}:`, error);
                  return null;
                }
              })
            );

            // Filter out any null values from failed requests
            const validBooks = booksData.filter(book => book !== null);
            setUserBooks(validBooks);
          }
        }
      } catch (err) {
        setError('Failed to load user information');
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleToHome = () => {
    navigate('/');
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleDeleteSuccess = (deletedBookId) => {
    setUserBooks((prevBooks) => prevBooks.filter((book) => book._id !== deletedBookId));
  };
  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await bookService.addBook(newBook);
      if (response.success) {
        alert('Book added successfully!');
        setNewBook({
          title: '',
          author: '',
          genre: '',
          condition: '',
          description: '',
          image: ''
        });
        // Refresh the books list
        const updatedProfileResponse = await authService.getUserProfile();
        if (updatedProfileResponse.success) {
          setUserInfo(updatedProfileResponse.data);
        }
        setSelectedMenu('MyBooks');
      } else {
        alert(response.message || 'Failed to add book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book. Please try again.');
    }
  };
  const renderContent = () => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!userInfo) return <div>No user information found</div>;

    switch (selectedMenu) {
      case 'Home':
        return (
          <div>
            <h2>Welcome, {userInfo.username}!</h2>
            <p>Email: {userInfo.email}</p>
            <p>Member since: {new Date(userInfo.createdAt).toLocaleDateString()}</p>
          </div>
        );

      case 'MyBooks':
        return (
          <div className="books-section">
            <h2>My Books</h2>
            <div className="books-grid">
              {userBooks && userBooks.length > 0 ? (
                userBooks.map((book) => (
                  <Borrowedbook
                    key={book._id}
                    bookId={book._id}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    genre={book.genre}
                    condition={book.condition}
                    onDeleteSuccess={handleDeleteSuccess}
                  />
                ))
              ) : (
                <p>No books added yet</p>
              )}
            </div>
          </div>
        );

      case 'EditAccount':
        return (
          <div style={{ padding: '20px' }}>
            <h2>Account Information</h2>
            <div style={{ marginTop: '20px' }}>
              <p><strong>Username:</strong> {userInfo.username}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Total Books:</strong> {userInfo.books.length}</p>
              <p><strong>Account Created:</strong> {new Date(userInfo.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        );
      case 'AddBook':
        return (
          <div style={{ padding: '20px' }}>
            <h2>Add New Book</h2>
            <div style={{ marginTop: '20px' }}>
              <form onSubmit={handleAddBook}>
                <div style={{ marginBottom: '15px', textAlign: "left" }}>
                  <label><strong>Title:</strong></label>
                  <input
                    type="text"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '5px',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '15px', textAlign: "left" }}>
                  <label><strong>Author:</strong></label>
                  <input
                    type="text"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '5px',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '15px', textAlign: "left" }}>
                  <label><strong>Genre:</strong></label>
                  <input
                    type="text"
                    name="genre"
                    value={newBook.genre}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '5px',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '15px', textAlign: "left" }}>
                  <label><strong>Condition:</strong></label>
                  <select
                    name="condition"
                    value={newBook.condition}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '5px',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="New">New</option>
                    <option value="Like New">Like New</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </select>
                </div>
                <div style={{ marginBottom: '15px', textAlign: "left" }}>
                  <label><strong>Image URL:</strong></label>
                  <input
                    type="url"
                    name="image"
                    value={newBook.image}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '5px',
                      borderRadius: '4px',
                      border: '1px solid #ddd'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '15px', textAlign: "left" }}>
                  <label><strong>Description:</strong></label>
                  <textarea
                    name="description"
                    value={newBook.description}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px',
                      marginTop: '5px',
                      borderRadius: '4px',
                      border: '1px solid #ddd',
                      minHeight: '100px',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  Add Book
                </button>
              </form>
            </div>
          </div>
        );

      default:
        return <div>Welcome to your account page</div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '75vh', border: '1px solid black' }}>
      <div
        style={{
          width: '20%',
          backgroundColor: '#f4f4f4',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          borderRight: '1px solid black',
        }}
      >
        <button
          style={{
            backgroundColor: selectedMenu === 'Home' ? '#007bff' : 'white',
            color: selectedMenu === 'Home' ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={handleToHome}
        >
          Home
        </button>

        <button
          style={{
            backgroundColor: selectedMenu === 'MyBooks' ? '#007bff' : 'white',
            color: selectedMenu === 'MyBooks' ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={() => setSelectedMenu('MyBooks')}
        >
          My Books
        </button>
        <button
          style={{
            backgroundColor: selectedMenu === 'AddBook' ? '#007bff' : 'white',
            color: selectedMenu === 'AddBook' ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={() => setSelectedMenu('AddBook')}
        >
          Add Book
        </button>
        <button
          style={{
            backgroundColor: selectedMenu === 'EditAccount' ? '#007bff' : 'white',
            color: selectedMenu === 'EditAccount' ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={() => setSelectedMenu('EditAccount')}
        >
          Account Info
        </button>
      </div>

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default DrawerMyAccount;
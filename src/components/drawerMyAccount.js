import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Borrowedbook from './borrowedbook';

function DrawerMyAccount() {
  // State to track which menu item is selected
  const [selectedMenu, setSelectedMenu] = useState('Home');

  // State to store user information for editing
  const [userInfo, setUserInfo] = useState({
    username: 'John Doe',
    email: 'johndoe@example.com',
    contactNumber: '123-456-7890',
    password: 'password123',
  });

  const navigate = useNavigate();

  // Function to navigate to the home page
  const handleToHome = () => {
    navigate('/');
  };

  // Handle input changes for the editable fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // Handle form submission (for now, just log the updated user info)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user info:', userInfo);
    // You can add functionality to save the edited information (e.g., sending it to the backend).
  };

  // Function to render content based on selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case 'Home':
        return <div>Welcome to your account page</div>;
      case 'BooksBorrowed':
        return (
          <div>
            <h2>Your Borrowed Books</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Borrowedbook bookid="1" />
              <Borrowedbook bookid="2" />
              <Borrowedbook bookid="3" />
              <Borrowedbook bookid="4" />
              <Borrowedbook bookid="5" />
            </div>
          </div>
        );
      case 'MyBooks':
        return <div>Your personal book collection is here</div>;
      case 'EditAccount':
        return (
          <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: '100%',
                maxWidth: '600px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h2>Edit Your Account Information</h2>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={userInfo.username}
                  onChange={handleInputChange}
                  style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                  style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="text"
                  name="contactNumber"
                  value={userInfo.contactNumber}
                  onChange={handleInputChange}
                  style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  onChange={handleInputChange}
                  style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </label>
              <button
                type="submit"
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                Save Changes
              </button>
            </form>
          </div>
        );
      default:
        return <div>Welcome to your account page</div>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '75vh', border: '1px solid black' }}>
      {/* Sidebar */}
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
            backgroundColor: selectedMenu === 'BooksBorrowed' ? '#007bff' : 'white',
            color: selectedMenu === 'BooksBorrowed' ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={() => setSelectedMenu('BooksBorrowed')}
        >
          Books Borrowed
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
            backgroundColor: selectedMenu === 'EditAccount' ? '#007bff' : 'white',
            color: selectedMenu === 'EditAccount' ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={() => setSelectedMenu('EditAccount')}
        >
          Edit Account
        </button>
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default DrawerMyAccount;

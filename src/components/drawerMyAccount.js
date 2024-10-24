import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function DrawerMyAccount() {
  // State to track which menu item is selected
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const navigate = useNavigate();
  // Function to render content based on selected menu
  const handleToHome = () =>{
    navigate('/');
  }
  const renderContent = () => {
    switch (selectedMenu) {
      case 'Home':
        return <div>Welcome to the Home page</div>;
      case 'BooksBorrowed':
        return <div>Your borrowed books are listed here</div>;
      case 'MyBooks':
        return <div>Your personal book collection is here</div>;
      default:
        return <div>Welcome to the Home page</div>;
    }
  };

  return (
    <div style={{ display: 'flex', border: '1px solid black' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
        <button 
          style={{ padding: '10px 0px', margin: '10% 0%' }} 
          onClick={handleToHome}
        >
          Home
        </button>
        <button 
          style={{ padding: '10px 0px', margin: '10% 0%' }} 
          onClick={() => setSelectedMenu('BooksBorrowed')}
        >
          Books Borrowed
        </button>
        <button 
          style={{ padding: '10px 0px', margin: '10% 0%' }} 
          onClick={() => setSelectedMenu('MyBooks')}
        >
          My Books
        </button>
      </div>
      <div style={{ flex: 1, padding: '20px', borderLeft: '1px solid black' }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default DrawerMyAccount;

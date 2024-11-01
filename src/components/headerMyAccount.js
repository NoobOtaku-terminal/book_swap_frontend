import React from 'react';
import logo from '../assets/book.jpeg';
import { useNavigate } from 'react-router-dom';

function HeaderMyAccount() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/'); // Redirect to homepage or login page after logout
  };

  // Retrieve user details if they are stored in localStorage
  const userName = localStorage.getItem('userName') || 'Name'; // Replace 'Name' with default or fetched user name
  const userEmail = localStorage.getItem('userEmail') || 'Email'; // Replace 'Email' with default or fetched email

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", margin: "1% 0%" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="User Avatar" style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }} />
        <h4>My Account</h4>
      </div>
      <h5>{userName}</h5>
      <h5>{userEmail}</h5>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default HeaderMyAccount;

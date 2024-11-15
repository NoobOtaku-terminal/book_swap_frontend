import React, { useState, useEffect } from 'react';
import logo from '../assets/book.jpeg';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/api';
import '../components_css/headerMyAccount.css';
function HeaderMyAccount() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await authService.getUserProfile();
        if (response.success) {
          setUserInfo(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="header-myaccount">
      <div className="header-left">
        <img src={logo} alt="User Avatar" className="header-avatar" />
        <h4>My Account</h4>
      </div>
      <div className="header-user-info">
        {userInfo && (
          <>
            <h5>Username: {userInfo.username}</h5>
            <h5>Email: {userInfo.email}</h5>
          </>
        )}
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default HeaderMyAccount;

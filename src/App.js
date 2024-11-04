import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/landing';
import MyAccount from './pages/myaccount';
import Header from './components/header';
import Login from './pages/login';
import Category from './pages/category'
import Footer from './components/footer'
import ContactUs from './pages/contactus';
import SignUp from './pages/signUp'
function AppContent() {
  const location = useLocation();  // useLocation now works because it's inside Router
  const hideHeader = [];  // List of routes where the header should be hidden

  return (
    <div >
      {/* Conditionally render Header based on current path */}
      {!hideHeader.includes(location.pathname) && <Header />}
      <div className="App">

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />  {/* AppContent is wrapped inside Router */}
    </Router>
  );
}

export default App;

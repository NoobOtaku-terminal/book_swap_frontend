import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import MyAccount from './pages/myaccount';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/myaccount" element={<MyAccount />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
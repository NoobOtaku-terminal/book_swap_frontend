import React from 'react'
import logo from '../assets/book.jpeg';
function headerMyAccount() {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", margin: "2% 0%" }}>
      <div>
        <img src={logo} alt="" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        <h4>My Account</h4>
      </div>
      <h5>Name</h5>
      <h5>Email</h5>
      <div><button>Logout</button></div>
    </div>
  )
}

export default headerMyAccount

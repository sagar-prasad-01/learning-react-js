import React from 'react'
import {Link  } from "react-router-dom";
import "./Navbar.css"

const Navbar = (props) => {
  return (
    <>
     <div className="nav">
       <h1>logo</h1>
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/contact">contact</Link></li>
      <li><Link to="/Login">Login</Link></li>
      <li><a href="">Services</a></li>
     </ul>
     </div>
    </>
  )
}

export default Navbar
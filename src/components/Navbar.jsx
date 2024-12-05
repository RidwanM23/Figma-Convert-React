import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Acara Musim Panas</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar 
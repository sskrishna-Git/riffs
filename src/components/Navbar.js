import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div onClick={handleReload} className="navbar-logo">Music App</div>
      <ul className="navbar-menu">
        <li><a href="#features">Features</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CalmSphere</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
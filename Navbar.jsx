import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  
  const [showMoreLinks, setShowMoreLinks] = useState(false);


  const toggleMoreLinks = () => {
    setShowMoreLinks(prevState => !prevState);
  };

  const isActive = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#ff6347' : '#ffffff',
      textDecoration: isActive ? 'underline' : 'none',
    };
  };

  return (
    <>
      <nav className='navigation'>
        <ul className='nav-container'>
          <li><NavLink to="/" style={isActive}>Home</NavLink></li>
          <li><NavLink to="/products" style={isActive}>Products</NavLink></li>
          <li><NavLink to="/contact-us" style={isActive}>Contact Us</NavLink></li>
          <li><NavLink to="/solar-saving-calculator" style={isActive}>Solar saving calculator</NavLink></li>

         
          <li onClick={toggleMoreLinks} style={{ cursor: 'pointer' }}>
            More
            <i className='bx bx-chevron-down' style={{ color: '#f2ecec', marginLeft: '5px' }}></i>
          </li>

          
          {showMoreLinks && (
            <div className='more-option'>
              <li><NavLink to="/Blog" style={isActive}>Blog</NavLink></li>
              <li><NavLink to="/FreeSolar" style={isActive}>Free solar</NavLink></li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-about">
          <h4>About Our Solar Project</h4>
          <p>We are committed to delivering sustainable energy solutions to power a brighter future. Join us in making the world greener, one solar panel at a time.</p>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="mailto:info@solarproject.com">Email: info@solarproject.com</a></li>
            <li><a href="tel:+1234567890">Phone: +123-456-7890</a></li>
            <li><a href="https://goo.gl/maps/example" target="_blank" rel="noopener noreferrer">Location: 123 Solar Ave, Green City</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="https://facebook.com/solarproject" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/solarproject" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com/solarproject" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com/company/solarproject" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Solar Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
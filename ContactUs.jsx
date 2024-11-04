import React, { useState } from 'react';
import './Contactus.css';

const ContactUs = () => {
  const [showFirstMap, setShowFirstMap] = useState(true);

  const toggleMap = () => {
    setShowFirstMap(!showFirstMap);
  };

  return (
    <div className="contact-us-container">
      <h1 className='contact-text'>Contact Us</h1>
      <div className="contact-us-wrapper">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="google-map">
          <h2>Our Location</h2>
          <button className='btn' onClick={toggleMap}>
            {showFirstMap ? 'View Second Location' : 'View First Location'}
          </button>
          {showFirstMap ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.3534168179135!2d86.2200191783721!3d22.826410525968424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e24fe863d1a3%3A0x452028451b32ed21!2sShivjee%20Singh%20Complex!5e0!3m2!1sen!2sin!4v1729584225577!5m2!1sen!2sin"
              className='map'
              style={{ border: 0 }}
              allowFullScreen
              
            ></iframe>
          ) : (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56935.264920664245!2d75.68418145179753!3d26.88908125643569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53a207ea269%3A0x6d24a1f7ed5bbbe!2sCorona%20Soltech%20-%20%231%20Solar%20Company%20in%20Jaipur!5e0!3m2!1sen!2sin!4v1730121546943!5m2!1sen!2sin"
             className='map'
              style={{ border: 0 }}
              allowFullScreen
              
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>

      <div className="contact-links">
        <h3>Contact Us Through:</h3>
        <ul>
          <li>
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-whatsapp" style={{ color: '#3ff40c' }}></i>
            </a>
          </li>
          <li>
            <a href="tel:+your-phone-number">
              <i className="bx bxs-phone" style={{ color: '#eef4ed' }}></i>
            </a>
          </li>
          <li>
            <a href="mailto:your-email@example.com">
              <i className="bx bxs-envelope" style={{ color: '#eef4ed' }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;

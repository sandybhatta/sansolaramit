import React from 'react';
import './Popup.css'; // Optional: Create a CSS file for styling

const Popup = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
        <i className='bx bx-x' style={{color:'#0b0b0b'}} ></i> 
        </button>
        <h1>Reduce your electricity bill to 0 rupees</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone" required />
          <input type="text" placeholder="Pincode" required />
          <button type="submit">Book FREE Site Survey</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
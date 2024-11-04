import React from 'react';
import './CompanyScroller.css';
import logo1 from './logo1.jpg'
import logo2 from './logo2.jpg'
import logo3 from './logo3.jpg'
import logo4 from './logo4.jpg'
import logo5 from './logo5.jpg'
import logo6 from './logo6.jpg'
import logo7 from './logo7.jpg'
import logo8 from './logo8.jpg'
import logo9 from './logo9.jpg'
import logo10 from './logo10.jpg'

const companyLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
];

const CompanyScroller = () => {
  return (
    <div className="scroller-container">
      <div className="scroller-content">
        {companyLogos.map((logo, index) => (
          <div key={index} className="logo-container">
            <img src={logo} alt={`Company logo ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate logos for smooth infinite scroll */}
        {companyLogos.map((logo, index) => (
          <div key={index + 10} className="logo-container">
            <img src={logo} alt={`Company logo duplicate ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyScroller;
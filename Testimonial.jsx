import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import photu1 from './th.jpg';
import photu2 from './bheem.jpg';
import photu3 from './kalia.jpg';
import photu4 from './kaliaUpdate.jpg';
import photu5 from './kaaliav2.jpg';

const testimonials = [
  {
    image: photu1,
    name: "Daaku Mangal",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    rating: 4,
  },
  {
    image: photu2,
    name: 'Bheem',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    rating: 5,
  },
  {
    image: photu3,
    name: 'Kalia',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    rating: 3,
  },
  {
    image: photu4,
    name: 'Kalia Bro',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    rating: 4,
  },
  {
    image: photu5,
    name: 'Kalia Maharaj',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    rating: 2,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with the 3rd testimonial
  const totalTestimonials = testimonials.length;

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [totalTestimonials]);

  const handleCircleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonial-container">
      <div className='left-side-testimonial'>
        <div className='circle'></div>
      </div>
      <div className="testimonial-content">
        <img
          src={testimonials[currentIndex].image}
          alt="Testimonial"
          className="testimonial-image"
        />
        
        <div className="testimonial-circles">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`circle ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleCircleClick(index)}
            ></div>
          ))}
        </div>

        <p className="testimonial-name">{testimonials[currentIndex].name}</p>
        <p className="testimonial-text">{testimonials[currentIndex].text}</p>
        
        <div className="testimonial-rating">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className="bx bxs-star"
              style={{
                color: i < testimonials[currentIndex].rating ? 'gold' : 'grey',
              }}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

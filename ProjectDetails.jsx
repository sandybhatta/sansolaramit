import React, { useState, useEffect, memo } from 'react';

import { useInView } from 'react-intersection-observer';
import './ProjectDetails.css';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 1000 / 20); // Frame rate = 30fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.floor(start));
    }, 30); // 30 ms for a smoother animation

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const ProjectDetails = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // Trigger when 30% of the component is visible
  });

  return (
    <div className="project-details" ref={ref}>
      
      <h2 className="scroll-text">Our Commissioned Projects</h2>
      
    
      {inView && (
        <div className="projects-grid">
          <div className="project-card">
            <h3>Residential Projects</h3>
            <Counter end={35} duration={2} /><p> Residential Projects Commissioned</p>
          </div>
          <div className="project-card">
            <h3>Rooftop Projects</h3>
            <Counter end={65} duration={2} /><p> Rooftop Projects Commissioned</p>
          </div>
          <div className="project-card">
            <h3>Ground Mount Projects</h3>
            <Counter end={25} duration={2} /> <p>Ground Mount Projects Commissioned</p>
          </div>
          <div className="project-card">
            <h3>Ground Mount Projects</h3>
            <Counter end={35} duration={2} /> <p>Ground Mount Projects Commissioned</p>
          </div>
          <div className="project-card">
            <h3>Ground Mount Projects</h3>
            <Counter end={15} duration={2} /> <p>Ground Mount Projects Commissioned</p>
          </div>
          <div className="project-card">
            <h3>Ground Mount Projects</h3>
            <Counter end={55} duration={2} /> <p>Ground Mount Projects Commissioned</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ProjectDetails);
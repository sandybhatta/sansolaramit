
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video3.mp4';
import video4 from '../videos/video4.mp4';
import ProjectDetails from './ProjectDetails';
import Testimonial from '../components/Testimonial';
import CompanyScroller from '../components/CompanyScroller';
import Footer from './Footer';
import SolarEnergyInfo from './SolarEnergyInfo';

const videos = [
  video1, video2, video3, video4
];
const Home = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const videoRef = useRef(null); // Use ref to control the video element

  // Automatically change videos every 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000); // 20 seconds per video

    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  const handleNext = () => {
    setDirection('left');
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevious = () => {
    setDirection('right');
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  }, [currentVideoIndex]);

  return (
    <>
    <div id="section1">
    <div className="home-container">
      <div className="controls">
        
        <div className='left-side'>
          <button className='control-button' onClick={handlePrevious}><i className='bx bx-left-arrow'></i></button>
          </div>

        <div className='right-side'>
          <button  className='control-button'  onClick={handleNext}><i className='bx bx-right-arrow'></i></button>
        </div>
        
        
      </div>

      <div className={`video-container ${direction}`}>
        <video
          ref={videoRef}
          key={currentVideoIndex}
          src={videos[currentVideoIndex]}
          
          autoPlay
          muted
          playsInline
        />
      </div>

        <div className='motto-container'>
          <h1 className='motto'><span>“Harness the Sun,</span> <span>Power Your Future:</span> <span>Clean Energy</span> for a Brighter Tomorrow.”</h1>
        </div>
        
    </div>
</div>
         <div>
          <SolarEnergyInfo/>
          <ProjectDetails/>
          <Testimonial/>
          <CompanyScroller/>
          <Footer/>
         </div>
</>
    
  );
};

export default Home;
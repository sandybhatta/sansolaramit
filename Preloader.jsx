import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie React Player
import animationData from '../preload/preloader.json'; // Import your JSON file

const Preloader = () => {
  return (
    <div className="preloader">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '100vh', width: '350px' }}
      />
    </div>
  );
};

export default Preloader;
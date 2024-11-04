import React, { useRef, useState } from 'react';
import './SolarEnergyInfo.css';

const SolarEnergyInfo = () => {
  const [cursorStyle, setCursorStyle] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const sentences = [
    "Harness the power of solar energy!",
    "Sustainable energy for a sustainable future.",
    "Save on electricity bills with SolarTech.",
    "Leading the way in renewable energy solutions."
  ];
  const leftSentences = [
    "SolarEnergySolutions provides clean, sustainable energy for your life.",
    "We offer solar systems to reduce your carbon footprint and energy costs.",
    "Join us for a greener future with high-quality solar installations.",
    "Our solutions ensure reliable, renewable power for years to come.",
    "Choose us for innovative, affordable solar technology and expert service."
  ];

  const rightCharRefs = useRef([]);
  const leftCharRefs = useRef([]);

  const handleMouseMove = (e) => {
    setCursorStyle({ x: e.pageX, y: e.pageY });
     // Debugging mouse position
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);

  };

  const handleMouseLeave = () => {
    setCursorVisible(false);
    
  };

  const isUnderCursor = (cursor, charElement) => {
    if (!charElement) return false;

    const rect = charElement.getBoundingClientRect();
    const charCenterX = rect.left + rect.width / 2 + window.scrollX;
    const charCenterY = rect.top + rect.height / 2 + window.scrollY;
    const distance = Math.sqrt(
      Math.pow(cursor.x - charCenterX, 2) +
      Math.pow(cursor.y - charCenterY, 2)
    );

    return distance < 35;
  };

  return (
    <div 
      className="solar-container" 
      onMouseMove={handleMouseMove} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="solar-section leftt">
      <h1 className='left-heading'>
          {"Solar Energy Solutions".split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="typewriter-char"
              ref={(el) => (leftCharRefs.current[charIndex] = el)}
              style={{
                fontSize: isUnderCursor(cursorStyle, leftCharRefs.current[charIndex]) ? '2.5rem' : '2rem',
                transition: 'font-size 0.2s ease',
                display: 'inline-block',
                marginRight: char === ' ' ? '0.5rem' : '0'
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <div className='left-text'>
          {leftSentences.map((sentence, sentenceIndex) => (
            <p key={sentenceIndex} className="typewriter-sentence">
              {sentence.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="typewriter-char"
                  ref={(el) => (leftCharRefs.current[sentenceIndex * 100 + charIndex + 100] = el)}
                  style={{
                    fontSize: isUnderCursor(cursorStyle, leftCharRefs.current[sentenceIndex * 100 + charIndex + 100]) ? '2.5rem' : '1.3rem',
                    transition: 'font-size 0.2s ease',
                    display: 'inline-block',
                    marginRight: char === ' ' ? '0.4rem' : '0'
                  }}
                >
                  {char}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
      <div className="solar-section rightt">
      <h1 className='right-heading'>
          {"Why choose us".split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="typewriter-char"
              ref={(el) => (rightCharRefs.current[charIndex] = el)}
              style={{
                fontSize: isUnderCursor(cursorStyle, rightCharRefs.current[charIndex]) ? '2.5rem' : '2rem',
                backgroundColor: isUnderCursor(cursorStyle, rightCharRefs.current[charIndex]) ? 'white' : 'black',
                color: isUnderCursor(cursorStyle, rightCharRefs.current[charIndex]) ? 'black' : 'white',
                transition: 'font-size 0.2s ease',
                display: 'inline-block',
                marginRight: char === ' ' ? '0.5rem' : '0'
                
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <div className="typewriter">
          {sentences.map((sentence, sentenceIndex) => (
            <div key={sentenceIndex} className="typewriter-sentence">
              {sentence.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className="typewriter-char"
                  ref={(el) => (rightCharRefs.current[(sentenceIndex+6) * 100 + charIndex] = el)}
                  style={{
                    fontSize: isUnderCursor(cursorStyle, rightCharRefs.current[(sentenceIndex+6) * 100 + charIndex]) ? '2.5rem' : '1.2rem',
                    transition: 'font-size 0.2s ease',
                    display: 'inline-block',
                    marginRight: char === ' ' ? '0.2rem' : '0'
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {cursorVisible && (
        <div
          className="custom-cursor"
          style={{
            left: `${cursorStyle.x - 25}px`,
            top: `${cursorStyle.y - 750}px`,
          }}
        >
          {/* Custom cursor graphic can go here */}
        </div>
      )}
    </div>
  );
};
export default SolarEnergyInfo;
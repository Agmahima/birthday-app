import React from 'react';
import balloonBorder from '../assets/Balloon-Border.png';

const BalloonBorder = ({ animate }) => {
  return (
    <img
      src={balloonBorder}
      alt="Balloon Border"
      className={`absolute top-0 w-full transition-transform duration-1000 ${animate ? 'animate-floatUp' : ''}`} // Add animation class conditionally
    />
  );
};

export default BalloonBorder;

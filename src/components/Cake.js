import React, { useEffect, useState } from 'react';
import cakeImage from '../assets/cake128.png'; // Ensure this is the correct path to your cake image

const Cake = ({ candlesLit }) => {
  const [flamesVisible, setFlamesVisible] = useState(false);

  useEffect(() => {
    if (candlesLit) {
      setFlamesVisible(true);
    }
  }, [candlesLit]);

  return (
    <div className="flex justify-center mt-8">
      <div className="relative">
        {/* Cake Image */}
        <img src={cakeImage} alt="Birthday Cake" className="w-40 h-auto" />

        {/* Flame for the candle */}
        {flamesVisible && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2">
            <div className="w-2 h-4 bg-yellow-400 rounded-full animate-flicker"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cake;

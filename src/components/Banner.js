import React from 'react';
import banner from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="flex justify-center mt-4">
      <img src={banner} alt="Banner" className="w-full md:w-1/2" />
    </div>
  );
};

export default Banner;

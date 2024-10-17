import React from 'react';
import photo1 from '../assets/B1.jpeg'; // Ensure correct path to your directory
import photo2 from '../assets/B12.png'; // Ensure correct path to your directory

const BirthdayMessage = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      {/* Left Photo */}
      <div className="relative mx-6">
        <img 
          src={photo1} 
          alt="Photo 1" 
          className="w-48 h-48 rounded-lg border-2 border-white" // Increased size
        />
      </div>

      {/* Message Box */}
      <div className="relative z-10 text-center text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl mb-4">🎉 Happy Birthday! 🎂</h1>
        <p className="text-lg">To a person who is Incredibly Incredible</p>
        <p className="mt-2">Wishing you a day filled with love, joy, and unforgettable moments!</p>
      </div>

      {/* Right Photo */}
      <div className="relative mx-6">
        <img 
          src={photo2} 
          alt="Photo 2" 
          className="w-48 h-48 rounded-lg border-2 border-white" // Increased size
        />
      </div>
    </div>
  );
};

export default BirthdayMessage;

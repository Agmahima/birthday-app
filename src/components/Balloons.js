import React from 'react';

const balloonsData = [
  { id: 1, color: 'bg-yellow-400', letter: 'H' },
  { id: 2, color: 'bg-blue-400', letter: 'B' },
  { id: 3, color: 'bg-red-400', letter: 'D' },
  { id: 4, color: 'bg-green-400', letter: 'B' },
  { id: 5, color: 'bg-purple-400', letter: 'H' },
  { id: 6, color: 'bg-pink-400', letter: 'A' },
  { id: 7, color: 'bg-teal-400', letter: 'V' },
  { id: 8, color: 'bg-red-400', letter: 'Y' },
  { id: 9, color: 'bg-yellow-400', letter: 'A' },
];

const Balloons = ({ animate }) => {
  return (
    <div className="relative z-10"> {/* Add relative positioning and z-index */}
      {balloonsData.map((balloon) => (
        <div
          key={balloon.id}
          className={`balloon ${balloon.color} text-white text-2xl font-bold flex items-center justify-center transition-transform duration-1000 ease-in-out ${
            animate ? 'transform translate-y-[-200px] opacity-100' : 'opacity-0'
          }`}
          style={{
            width: '80px',
            height: '100px',
            borderRadius: '50%',
            position: 'absolute',
            bottom: '150px', // Now above the cake (adjust this as needed)
            left: `${balloon.id * 10}%`, // Adjust horizontal spacing
            zIndex: 10, // Ensure balloons are above the cake
          }}
        >
          {balloon.letter}
        </div>
      ))}
    </div>
  );
};

export default Balloons;

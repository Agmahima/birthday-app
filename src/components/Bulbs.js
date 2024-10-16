import React from 'react';
import bulb1 from '../assets/bulb_blue.png'; // Adjust paths for your bulb images
import bulb2 from '../assets/bulb_green.png';
import bulb3 from '../assets/bulb_orange.png';
import bulb4 from '../assets/bulb_pink.png';
import bulb5 from '../assets/bulb_red.png';
import bulb6 from '../assets/bulb_yellow.png';
import bulb7 from '../assets/bulb.png';
import bulb8 from '../assets/bulb_yellow.png';
import bulb9 from '../assets/bulb_red.png';

const bulbsData = [
  { id: 1, src: bulb1, left: '5%', top: '5%' },
  { id: 2, src: bulb2, left: '20%', top: '5%' },
  { id: 3, src: bulb3, left: '35%', top: '5%' },
  { id: 4, src: bulb4, left: '50%', top: '5%' },
  { id: 5, src: bulb5, left: '65%', top: '5%' },
  { id: 6, src: bulb6, left: '80%', top: '5%' },
  { id: 7, src: bulb7, left: '95%', top: '5%' },
  { id: 8, src: bulb8, left: '10%', top: '10%' },
  { id: 9, src: bulb9, left: '25%', top: '10%' },
];

const Bulbs = () => {
  return (
    <div className="absolute top-0 left-0 w-full">
      {bulbsData.map((bulb) => (
        <img
          key={bulb.id}
          src={bulb.src}
          alt={`Bulb ${bulb.id}`}
          className="absolute"
          style={{ left: bulb.left, top: bulb.top, width: '50px' }} // Adjust size as needed
        />
      ))}
    </div>
  );
};

export default Bulbs;

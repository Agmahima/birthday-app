import React from 'react';
import hbdSong from '../assets/hbd.mp3';
import song from '../assets/birthday.m4a';
import hbd from '../assets/happy-birthday.mp3';

const AudioPlayer = () => {
  return (
    <audio src={hbd} autoPlay loop />
  );
};

export default AudioPlayer;

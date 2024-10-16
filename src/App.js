import React, { useState, useEffect } from 'react';
import Balloons from './components/Balloons';
import Cake from './components/Cake';
import Banner from './components/Banner';
import Message from './components/Message';
import Controls from './components/Controls';
import AudioPlayer from './components/AudioPlayer';
import BalloonBorder from './components/BalloonBorder';
import Bulbs from './components/Bulbs';
import BirthdayMessage from './components/BirthdayMessage';
import './App.css';


function App() {
  const [state, setState] = useState({
    lightsOn: false,
    musicOn: false,
    showBanner: false,
    showBalloons: false,
    showCake: false,
    candlesLit: false,
    showMessage: false,
    showFinalMessage: false,
    showBirthdayMessage: true,
    animateBalloons: false,
  });

  const [animateBorder, setAnimateBorder] = useState(false); 

  useEffect(() => {
    if (state.lightsOn) {
      document.body.classList.add('bg-peach');
      setState((prevState) => ({ ...prevState, showBirthdayMessage: true }));
    } else {
      document.body.classList.remove('bg-peach');
      setState((prevState) => ({ ...prevState, showBirthdayMessage: false }));
    }
  }, [state.lightsOn]);

  useEffect(() => {
    if (state.showCake) {
      // Trigger the balloon animation when the cake is shown
      setState((prevState) => ({ ...prevState, animateBalloons: true }));
    }
  }, [state.showCake]);

  const handleDecorateClick = () => {
    setAnimateBorder(true); // Trigger the balloon animation
    setState((prevState) => ({
      ...prevState,
      showBalloons: true, // Show balloons when decorating
      showBirthdayMessage:false,
    }));
    
    // Reset animation after a delay to allow re-triggering
    setTimeout(() => {
      setAnimateBorder(false); // Reset animation state
    }, 3000); // Adjust time according to animation duration
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      {state.musicOn && <AudioPlayer />}
      {state.showBanner && <Banner />}
      {state.showBalloons && <Balloons animate={state.animateBalloons}/>}
      {state.showBalloons && <BalloonBorder /> }
      {state.showBalloons && <Bulbs />}
      {state.showBalloons && <BalloonBorder animate={animateBorder} /> }
      {state.showBirthdayMessage && <BirthdayMessage />}
      {state.showCake && <Cake candlesLit={state.candlesLit} />}
      {state.showMessage && <Message showFinalMessage={state.showFinalMessage} />}
      
      <Controls state={state} setState={setState} onDecorateClick={handleDecorateClick}/>
    </div>
  );
}

export default App;

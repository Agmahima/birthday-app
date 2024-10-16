import React from 'react';

const Controls = ({ state, setState }) => {
  const handleClick = (action) => {
    setState((prevState) => ({ ...prevState, ...action }));
  };

  return (
    <div className="fixed bottom-0 w-full flex flex-wrap justify-center bg-white py-4 space-x-2">
      {!state.lightsOn && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ lightsOn: true })}
        >
          Turn On Lights
        </button>
      )}
      {state.lightsOn && !state.musicOn && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ musicOn: true })}
        >
          Play Music
        </button>
      )}
      {state.musicOn && !state.showBanner && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ showBanner: true ,showBirthdayMessage: false})}
        >
          Let's Decorate!
        </button>
      )}
      {state.showBanner && !state.showBalloons && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ showBalloons: true })}
        >
          Show Balloons
        </button>
      )}
      {state.showBalloons && !state.showCake && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ showCake: true })}
        >
          Show Cake
        </button>
      )}
      {state.showCake && !state.candlesLit && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ candlesLit: true })}
        >
          Light Candles
        </button>
      )}
      {state.candlesLit && !state.showMessage && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ showMessage: true })}
        >
          Show Message
        </button>
      )}
      {state.showMessage && !state.showFinalMessage && (
        <button
          className="btn-primary"
          onClick={() => handleClick({ showFinalMessage: true })}
        >
          Final Surprise!
        </button>
      )}
    </div>
  );
};

export default Controls;

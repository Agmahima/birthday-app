import React, { useEffect, useState } from 'react';

const messages = [
  'Many Many Happy Returns of the Day!!!!! Google Boy :)',
  'A very Happy Birthday to Someone Special....',
  'Happiest Birthday to youuuuuu.....',
  'Achieve all the Goals u have in your life',
 
];

const Message = ({ showFinalMessage }) => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    if (showFinalMessage) {
      let messageInterval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 2000);

      return () => clearInterval(messageInterval);
    }
  }, [showFinalMessage]);

  return (
    <div className="flex justify-center mt-8">
      <p className="text-4xl font-bold text-pink-600">{messages[currentMessage]}</p>
    </div>
  );
};

export default Message;

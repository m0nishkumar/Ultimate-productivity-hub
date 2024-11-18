import React, { useState, useEffect } from 'react';


const SentenceFadeAnimation = ({ sentences }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentenceIndex(prevIndex =>
        prevIndex === sentences.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the duration as needed (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [sentences]);

  return (
    <div className="h-full w-full">
      {sentences.map((sentence, index) => (
        <div
          key={index}
          className={`sentence ${
            index === currentSentenceIndex ? 'visible' : ''
          }`}
        >
          {sentence}
        </div>
      ))}
    </div>
  );
};

export default SentenceFadeAnimation;

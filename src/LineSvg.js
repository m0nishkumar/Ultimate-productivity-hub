import React, { useEffect, useState } from 'react';


export const LineSvg = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const mainLine = document.getElementById("mainLine");
    const totalLength = mainLine.getTotalLength();

    // Simulate the line drawing process
    const animationInterval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(animationInterval);
      } else {
        setProgress(progress + 10); // Increase progress by 10% (adjust as needed)
      }
    }, 1000); // Adjust the animation speed as needed

    return () => clearInterval(animationInterval);
  }, [progress]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 250 250">
          <path id="mainLine" d="M20,20 Q100,80 180,20 T240,220" fill="none" stroke="black" stroke-width="5" />
        </svg>
      </div>
    </div>
  );
};


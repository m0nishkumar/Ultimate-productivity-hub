import React from "react";
import { useState,useEffect } from "react";
export const Slideshow = ({ images, interval,value }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const img=[1,2,3,4,5,6];
useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images, interval]);

  return (
    <div className="slideshow">
     {(!value)? <video
  key={images} 
  className="h-full rounded-xl"
  autoPlay
  loop
>
  <source src={`./${images}.mp4`} type="video/mp4" />
  Your browser does not support the video tag.
</video>:<img src={`${img[currentIndex]}.png`} alt={img[currentIndex]} className="h-[560px] w-[480px] rounded-l-2xl"/>}
      {/* <img src={images} className="h-[210px] p-1 my-1 w-[410px] rounded-2xl opacity-90" alt={`Slide ${currentIndex}`} /> */}
      {/* <img src="https://thumbs.dreamstime.com/b/happy-family-mother-father-children-son-daughter-sunset-nature-150794881.jpg" className="h-[210px] shadow my-1 w-[410px] rounded-2xl opacity-90" alt={`Slide ${currentIndex}`} /> */}
    </div>
  );
};
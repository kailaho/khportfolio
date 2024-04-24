import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const BannerAnimation= ({text}) => {
  const [gradientColors, setGradientColors] = useState(['#77b9f2', '#ed2b55', '#f5e1f3']);
  
  // Define the animation for the background color
  const props = useSpring({
    background: `linear-gradient(50deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
    config: { duration: 3000 },
  });

  // Update gradient colors every 4 seconds (adjust as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate the colors array to change the order of colors
      setGradientColors((prevColors) => [
        prevColors[1],
        prevColors[2],
        prevColors[0],

      ]);
    }, 3000); // Change colors every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
    <div ></div>
    <animated.div style={{ ...props, height: '20vh', width: '100%',display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: '3'}}>
      <h2 style={{color: 'black', background: 'none', fontSize: '2.5em', zIndex: '7'}}>{text}</h2>
    </animated.div>
    </>
  );
};

export default BannerAnimation;

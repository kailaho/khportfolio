import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const TitleAnimation = ({text}) => {
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
    <animated.div style={{ ...props, width: '70%', alignItems: 'center', textAlign: 'center', justifyContent: 'center', padding: '1em', borderRadius: '1.5em', margin: '1em', boxShadow: '0 4px 8px rgba(128, 128, 128, 0.5)' }}>
      <h3>{text}</h3>
    </animated.div>
    </>
  );
};

export default TitleAnimation;

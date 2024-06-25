import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Alert = ({ message, showAlert, setShowAlert, alertType }) => {
    // This is to set the states at initial for hovering to stop time and the id for the timer
  const [isHovered, setIsHovered] = useState(false);
  const [timerId, setTimerId] = useState(null);

  // The react spring animation for the alert div
  const alertAnimation = useSpring({
    transform: showAlert ? 'translateX(0)' : 'translateX(-100%)',
    opacity: showAlert ? 1 : 0,
    config: { tension: 220, friction: 20 },
  });

  // The countdown for the alert
  useEffect(() => {
    if (showAlert && !isHovered) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000); // Hide alert after 5 seconds
      setTimerId(timer);
    }

    return () => clearTimeout(timerId);
  }, [showAlert, isHovered, setShowAlert]);

  // Pausing the timer
  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(timerId);
  };

  // Resuming the timer
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000);
      setTimerId(timer);
    }
  };

  return (
    <animated.div
      style={alertAnimation}
      className={`fixed top-4 left-4 ${alertType === "error" ? "bg-red-500" : "bg-blue-500"} text-white p-4 w-1/2 md:w-1/3 lg:w-[15%] rounded shadow-lg flex justify-between items-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>{message}</span>
      <button
        className="ml-4 text-white"
        onClick={() => setShowAlert(false)}
      >
        &times;
      </button>
    </animated.div>
  );
};

export default Alert;

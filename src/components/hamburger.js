import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkModeButton from './darkmodebutton';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

//   const slideFade = useSpring({
//     onStart: () => {
//         if (isMenuOpen) {
//             setOpen(true)
//         }
//     },
//     opacity: isMenuOpen ? 1 : 0,
    // config : {tension : 150, friction : 20},
//     transform: isMenuOpen ? `translateX(0)` : `translateX(120%)`, // Slide in from right when open; slide out to right when closed
//     from: { opacity: 0, transform: 'translateX(100%)' },
//     onRest: () => {
//         // Only set 'open' to false when the menu is closing, i.e., when isMenuOpen is false
//         if (!isMenuOpen) {
//             setOpen(false);
//     }
//     }
// });

  const animation = useSpring({
    onStart: () => {
    if (isOpen) {
        setIsOpening(true)
    }
    },
    opacity: isOpen ? 1 : 1,
    config : {tension : 150, friction : 20},
    transform: isOpen ? `translateX(0%)` : `translateX(-50%)`, // Slide in from right when open; slide out to right when closed
    onRest: () => {
        if (!isOpen) {
            setIsOpening(false)
        }   
    }
  });

  const hamburgerAnimation = useSpring({
    config : {tension : 190, friction : 20},
    transform: isOpen ? `translateX(0%)` : `translateX(90%)`,
  })

  return (
    <>
        <animated.div style={animation} className={`w-1/2 h-full sm:w-1/3 flex flex-row absolute md:hidden  z-75`}>
            <animated.div
                style={animation}
                className={`flex w-full bg-white h-full z-40 md:hidden`}
            >
                <nav className="flex flex-col p-4 justify-center items-center w-full">
                <a href="#home" className="py-2">Home</a>
                <a href="#portfolio" className="py-2">Portfolio</a>
                <a href="#about" className="py-2">About</a>
                <a href="#contact" className="py-2">Contact</a>
                </nav>
                <animated.button
                    className={`flex md:hidden p-2 focus:outline-none absolute right-0`}
                    onClick={toggleMenu}
                    style={hamburgerAnimation}
                >
                    {isOpen ? <XMarkIcon className="h-6 w-6 text-gray-800" /> : <Bars2Icon className="h-6 w-6 text-gray-800" />}
                </animated.button>
                <div className='absolute left-0 p-2'><DarkModeButton /></div>
            </animated.div>
        </animated.div>
    </>
  );
}

export default Hamburger;

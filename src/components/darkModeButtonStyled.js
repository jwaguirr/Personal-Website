import React, {useContext} from 'react'
import { DarkModeContext } from '../contexts/darkmode';

function DarkModeButtonStyled() {
    // Dark mode for large screens
    // Simply a dark mode button that relys on the context
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const darkModeToggle = () => {
        toggleDarkMode(!isDarkMode)
    }
    return (
        <button
        onClick={darkModeToggle}
        className={`md:flex items-center hidden  w-[5rem] h-12  p-2 rounded-full cursor-pointer transition-colors bg-opacity-[60%] duration-500 ${isDarkMode ? 'bg-black' : 'bg-gray-300'}`}
        >
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full transform transition-transform duration-300 ${isDarkMode ? 'translate-x-8' : 'translate-x-0 bg-gray-100'}`}
        >
          {isDarkMode ? (
            // Moon SVG
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          ) : (
            // Sun SVG
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>

          )}
        </div>
    </button>
    )
}

export default DarkModeButtonStyled
import React, {useContext} from 'react'
import { DarkModeContext } from '../contexts/darkmode'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function DarkModeButton({darkModeToggle}) {
    // This is the dark mode button for small screens 
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const darkModeToggleLocal = () => {
        toggleDarkMode(!isDarkMode)
        darkModeToggle()
    }

  return (
    <div className='flex flex-row gap-1' onClick={darkModeToggleLocal}>
       {isDarkMode ? "Light" : "Dark"}{!isDarkMode ? <MoonIcon  className='w-5 h-5'/> : <SunIcon className='w-5 h-5'/>}
    </div>
  )
}

export default DarkModeButton
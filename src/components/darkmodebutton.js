import React, {useContext} from 'react'
import { DarkModeContext } from '../contexts/darkmode'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

function DarkModeButton() {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

    const darkModeToggle = () => {
        console.log("Switching modes")
        toggleDarkMode(!isDarkMode)
    }

  return (
    <div className='flex flex-row gap-1' onClick={darkModeToggle}>
       {isDarkMode ? "Light" : "Dark"}{!isDarkMode ? <MoonIcon  className='w-5 h-5'/> : <SunIcon className='w-5 h-5'/>}
    </div>
  )
}

export default DarkModeButton
import React, { act, useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import { DarkModeContext } from '../contexts/darkmode';
import DarkModeButton from "./darkmodebutton";
import DarkModeButtonStyled from "./darkModeButtonStyled";

export default function NavBar({ className }) {
    // States to track which item is being pressed in the navmenu
  const [active, setActive] = useState(null);
  const [previousActiveState, setPreviousActiveState] = useState(null);
  // For the darkmode and large screen for the logic on mobile. On mobile, it shouldnt route to home without checking if the user wanted to chaneg the darkmode
  const [isDarkModeToggled, setIsDarkModeToggled] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    // Simply a function to grab the user device size for scrolling logic
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // More logic to dictate if the user intended to switch themes or go home. 
    if (active === null && previousActiveState === "Home" && isDarkModeToggled === false) {
        const targetElement = document.getElementById('Home');
        if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }
    setPreviousActiveState(active)
    setIsDarkModeToggled(false)
  }, [active])

  const darkModeToggle = () => {
    // Setting the dark mode state, not global theme, just local state for tracking
    setIsDarkModeToggled(!isDarkModeToggled)
  }

  const handleMenuItemClick = (item) => {
    // Scrolling to the id at the root 
    setActive(item);
    const targetElement = document.getElementById(item);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-8">
      <div className={cn("fixed inset-x-0 max-w-xs mx-auto z-30 font-reddit", className)}>
        <Menu setActive={setActive}>
          <MenuItem isChildren={true} setActive={setActive} active={active} item="Home" toggleFunction={() => isLargeScreen ? handleMenuItemClick("Home") : ""}>
            <div className="flex flex-col space-y-4 text-sm cursor-pointer md:hidden">
              <HoveredLink><DarkModeButton darkModeToggle={darkModeToggle}/></HoveredLink>
            </div>
          </MenuItem>
          <MenuItem isChildren={false} setActive={setActive} active={active} item="About" toggleFunction={() => handleMenuItemClick("About")}>
            About
          </MenuItem>
          <MenuItem  isChildren={false} setActive={setActive} active={active} item="Projects" toggleFunction={() => handleMenuItemClick("Projects")}>
            Projects
          </MenuItem>
          <MenuItem isChildren={false} setActive={setActive} active={active} item="Contact" toggleFunction={() => handleMenuItemClick("Contact")}>
            Contact
          </MenuItem>
        </Menu>
      </div>
      <div className="fixed mt-9 right-4 z-50 top-0 ">
        <DarkModeButtonStyled />
      </div>
    </div>
  );
}

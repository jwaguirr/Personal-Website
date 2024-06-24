import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import { DarkModeContext } from '../contexts/darkmode';
import DarkModeButton from "./darkmodebutton";
import DarkModeButtonStyled from "./darkModeButtonStyled";

export default function NavBar({ className }) {
  const [active, setActive] = useState(null);

  const handleMenuItemClick = (item) => {
    setActive(item);
    const targetElement = document.getElementById(item);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-8">
      <div className={cn("fixed inset-x-0 max-w-xs mx-auto z-50 font-reddit", className)}>
        <Menu setActive={setActive}>
          <MenuItem isChildren={true} setActive={setActive} active={active} item="Home" toggleFunction={() =>handleMenuItemClick("Home")}>
            <div className="flex flex-col space-y-4 text-sm cursor-pointer md:hidden">
              <HoveredLink><DarkModeButton /></HoveredLink>
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

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faSun, faAdjust } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

const ThemeOption = ({ icon, label }) => (
  <div className="text-small cursor-pointer p-2 flex items-center justify-start gap-2 rounded-md hover:bg-main">
    <FontAwesomeIcon icon={icon} />
    {label}
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleClose = () => {
    setIsMenuOpen(false);
  };

  // Define constant menu items
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "User list", link: "/users/userlist" },
    { label: "Create user", link: "/users/create" },
    { label: "Role list", link: "/users/rolelist" },
  ];

  return (
    <div className="w-[100%] navbar  py-2 shadow-2xl tablet:shadow-sm bg-[#141414] tablet:bg-main">
      <div className="flex items-center justify-between max-container">
        <Link href={"/"}>
          <p className="text-xl">PICO SBS</p>
        </Link>
        <div className="flex items-center gap-3">
          <Popover placement="right">
            <PopoverTrigger>
              <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
                <FontAwesomeIcon icon={faMoon} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="bg-secondary rounded-sm">
              <div className="px-1 py-2 w-32">
                <ThemeOption icon={faMoon} label="Dark" />
                <ThemeOption icon={faSun} label="Light" />
                <ThemeOption icon={faAdjust} label="System" />
              </div>
            </PopoverContent>
          </Popover>

          {/* <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
            <p>N</p>
          </div> */}
          <Popover placement="right">
            <PopoverTrigger>
              <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
                <p>N</p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="bg-secondary p-2 py-4 w-32 rounded-sm">
              <p>nwin</p>
              <hr className="w-full text-zinc-700 h-[0.5px] my-1"></hr>
              <p>Log out</p>
            </PopoverContent>
          </Popover>
          <div
            className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer tablet:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute z-[9999] tablet:hidden top-16 shadow-2xl rounded-lg p-4 py-10 right-5 bg-[#141414] w-48">
          <ul className="flex flex-col gap-8 text-white">
            {menuItems.map((menuItem, index) => (
              <Link href={menuItem.link} key={index}>
                <li className="cursor-pointer" onClick={toggleClose}>
                  {menuItem.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

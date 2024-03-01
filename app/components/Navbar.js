import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faSun } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
          <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
            {/* <ThemeSwitch /> */}
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
            <p>N</p>
          </div>
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
            {/* Render menu items */}
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

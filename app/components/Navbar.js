import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdMenu } from "react-icons/io";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="w-[100%] navbar py-2 shadow-2xl tablet:shadow-sm bg-[#141414] tablet:bg-main">
      <div className="flex items-center justify-between  max-container ">
        <p className="text-xl">PICO SBS</p>
        <div className="flex items-center gap-3">
          <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
            <ThemeSwitch />
          </div>
          <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
            <p>N</p>
          </div>
          <div
            // onClick={toggleSidebar}
            className="tablet:hidden p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer"
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

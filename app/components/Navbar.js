import React from "react";

const Navbar = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center justify-between  max-container ">
        <p className="logo">PICO SBS</p>
        <div className="flex items-center gap-3">
          <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
            <p>English</p>
          </div>
          <div className="p-2 px-3 bg-[#1f1f20] rounded-md cursor-pointer">
            <p>N</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { sidebarData } from "../utils/data";
import Image from "next/image";

const Sidebar = ({ open, hovered, setHovered }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [secondActiveMenu, setSecondActiveMenu] = useState("");
  const [itemMenu, setItemMenu] = useState("");

  const activeHandler = (active) => {
    if (activeMenu === active) {
      setActiveMenu("");
    } else {
      setActiveMenu(active);
    }
  };
  const secondActiveHandler = (active) => {
    if (secondActiveMenu === active) {
      setSecondActiveMenu("");
    } else {
      setSecondActiveMenu(active);
    }
  };
  const itemMenuHandler = (active) => {
    setItemMenu(active);
  };

  return (
    <div
      className={`h-[100vh] hidden tablet:flex sticky top-0 left-0 px-2 bg-secondary color-white pt-5 ${
        hovered ? "w-[17rem]" : "w-20"
      } duration-400 relative group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col gap-1 overflow-hidden">
        <div className="w-[100px] h-[100px]">
          <Link href={"/"}>
            <Image src="/img/pico.png" width={50} alt="logo" height={50} />
          </Link>
        </div>
        {sidebarData &&
          sidebarData.map((menu, index) => (
            <div key={index} className="block">
              <div
                onClick={() => activeHandler(menu.menu_name)}
                className="flex w-full justify-between items-center px-4 py-3 mb-2 text-sm font-medium cursor-pointer hover:bg-main rounded-md hover:text-white"
              >
                <div
                  className={`flex items-center justify-center gap-4 ${
                    activeMenu === menu.menu_name
                      ? "text-white"
                      : "text-[#e3e4e6] "
                  }`}
                >
                  <div className={`p-2 rounded-md`}>
                    <FontAwesomeIcon icon={menu.menu_icon} />
                  </div>
                  <p
                    className={`${
                      activeMenu === menu.menu_name
                        ? "text-white"
                        : "text-[#e3e4e6]"
                    } duration-300 ${
                      !open && "opacity-0"
                    } group-hover:opacity-100`}
                  >
                    {menu.menu_name}
                  </p>
                </div>

                <IoIosArrowDown
                  className={`w-3 h-3 ${
                    activeMenu === menu.menu_name
                      ? "rotate-180 text-white"
                      : "text-[#e3e4e6]"
                  } ease-in-out transform duration-300`}
                />
              </div>

              <div
                className={`transition-all transform ease-in-out ${
                  activeMenu === menu.menu_name
                    ? "visible max-h-[50rem] duration-300"
                    : "invisible max-h-0 duration-300"
                } ${
                  !open && "opacity-0 invisible hidden"
                } group-hover:opacity-100 group-hover:visible group-hover:flex flex duration-300 flex-col overflow-hidden w-full items-center px-4 text-left text-sm font-medium`}
              >
                {menu.child_menus.map((menu_item, index) => (
                  <div key={index} className={`w-full flex flex-col gap-2`}>
                    {menu_item?.child_menus ? (
                      <div>
                        <div
                          onClick={() =>
                            secondActiveHandler(menu_item.menu_name)
                          }
                          className="w-full px-3 hover:bg-main rounded-md flex justify-between items-center pl-4 py-2 text-sm font-medium cursor-pointer hover:text-white nav_menu"
                        >
                          <div
                            className={`flex items-center justify-center gap-2 ${
                              secondActiveMenu === menu_item.menu_name
                                ? "text-white"
                                : "text-[#e3e4e6]"
                            }`}
                          >
                            <FontAwesomeIcon icon={menu_item?.menu_icon} />
                            <p
                              className={`${
                                secondActiveMenu === menu_item.menu_name
                                  ? "text-white"
                                  : "text-[#e3e4e6]"
                              }`}
                            >
                              {menu_item.menu_name}
                            </p>
                          </div>

                          <IoIosArrowDown
                            className={`w-3 h-3 ${
                              secondActiveMenu === menu_item.menu_name
                                ? "rotate-180 text-white"
                                : "text-[#e3e4e6]"
                            } ease-in-out transform duration-300`}
                          />
                        </div>
                        {menu_item.child_menus &&
                          menu_item.child_menus?.map((child_menu, index) => (
                            <div
                              key={index}
                              className={`transition ${
                                secondActiveMenu === menu_item.menu_name
                                  ? "ease-in duration-300 visible max-h-[25rem]"
                                  : "ease-out duration-200 invisible max-h-0"
                              } flex flex-col overflow-hidden w-full items-center px-4 text-left text-sm font-medium`}
                            >
                              <div className={`w-full flex flex-col gap-1`}>
                                <div
                                  className={`px-4 py-2 w-full rounded-md cursor-pointer ${
                                    itemMenu === child_menu.menu_name
                                      ? "bg-secondary"
                                      : "bg-transparent"
                                  }`}
                                >
                                  <Link href={`${child_menu.link}`}>
                                    <span
                                      onClick={() =>
                                        itemMenuHandler(child_menu.menu_name)
                                      }
                                      className={`flex items-center gap-2 min-w-[200px] ${
                                        itemMenu === child_menu.menu_name
                                          ? "text-white"
                                          : ""
                                      } `}
                                    >
                                      <span
                                        className={`w-1 h-1 rounded-full ${
                                          itemMenu === child_menu.menu_name
                                            ? "bg-[#fff]"
                                            : "bg-[#7E8299]"
                                        } `}
                                      ></span>
                                      <p className={``}>
                                        {child_menu.menu_name}
                                      </p>
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    ) : (
                      <div
                        className={`px-4 py-2 w-full rounded-md cursor-pointer hover:bg-main`}
                      >
                        <Link href={`${menu_item.link}`}>
                          <span
                            onClick={() =>
                              secondActiveHandler(menu_item.menu_name)
                            }
                            className={`flex items-center gap-2 min-w-[200px] ${
                              secondActiveMenu === menu_item.menu_name
                                ? "text-white"
                                : "text-[#e3e4e6]"
                            } `}
                          >
                            <FontAwesomeIcon icon={menu_item?.menu_icon} />
                            <p
                              className={`${
                                secondActiveMenu === menu_item.menu_name
                                  ? "text-white"
                                  : "text-[#e3e4e6]"
                              } `}
                            >
                              {menu_item.menu_name}
                            </p>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;

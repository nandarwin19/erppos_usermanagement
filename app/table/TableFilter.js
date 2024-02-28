import React from "react";

import {
  faDownload,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import UserListProvider from "../users/UserListProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export const TableFilter = ({ searchQuery }) => {
  const router = useRouter();

  const goToCreate = () => {
    router.push("/users/create");
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4 px-8">
        <div className="flex items-center">
          <div className="w-80 relative group">
            <input
              className="w-80 rounded-md bg-main h-10 px-4  hover:text-white placeholder:text-gray-300 outline-none group-hover:scale-105 duration-300 ease-in-out"
              // value={searchQuery}
              // onChange={handleSearchChange}
              placeholder="Search user"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-2 top-3 text-gray-300 group-hover:scale-105 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <button className="bg-main text-gray-300 h-10 hover:bg-[#2d68ac] hover:text-white hover:scale-105 duration-200 ease-inh-10 px-3 rounded-md">
              <FontAwesomeIcon icon={faFilter} className="mr-2" />
              Filter
            </button>
          </div>
          <div>
            <button className="bg-main text-gray-300 hover:bg-[#2d68ac] hover:text-white hover:scale-105 duration-200 ease-in h-10 px-3 rounded-md">
              <FontAwesomeIcon icon={faDownload} className="mr-2" />
              Export
            </button>
          </div>
          <div>
            <button
              onClick={goToCreate}
              className=" text-gray-300 bg-[#2d68ac] hover:text-white hover:scale-105 duration-200 ease-in h-10 px-3 rounded-md"
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const UsersListWithContext = () => {
  return (
    <UserListProvider>
      <TableFilter />
    </UserListProvider>
  );
};

export default UsersListWithContext;

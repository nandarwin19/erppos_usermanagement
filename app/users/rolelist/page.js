"use client";

import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserListProvider, { UserListContext } from "../UserListProvider";
import { useRouter } from "next/navigation";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { RoleFilter } from "@/app/table/RoleFilter";

const AddRole = () => {
  const {
    roleData,
    deleteRole,
    filteredSearchData,
    handleRoleSearchChange,
    roleSearchQuery,
  } = useContext(UserListContext);
  const router = useRouter();

  console.log(roleData);

  const goBack = () => {
    router.push("/");
  };
  return (
    <div>
      <Toaster position="top-center" />
      <div className="w-full h-full">
        <div className="my-2">
          <div
            onClick={goBack}
            leftIcon={faArrowLeft}
            className="bg-transparent cursor-pointer text-sm text-gray-400 "
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mx-1" />
            Back
          </div>
        </div>
        <div className="bg-secondary pb-8 min-h-[90vh] rounded-xl px-8">
          <div className="pt-6">
            <h1 className="font-semibold text-xl text-gray-300 mb-4">
              Role List
            </h1>
          </div>
          <RoleFilter
            handle={handleRoleSearchChange}
            searchQuery={roleSearchQuery}
          />
          <div className=" border w-full py-4 px-4 rounded-md min-h-[70vh] border-main/70">
            <div className="">
              {(filteredSearchData.length > 0
                ? filteredSearchData
                : roleData
              ).map((data, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 capitalize border-0 border-b border-gray-500 border-dashed pb-2 my-4 "
                >
                  <p className="col-span-10 tablet:col-span-11">{data.name}</p>
                  <Dropdown className="col-span-1 tablet:col-span-2">
                    <DropdownTrigger>
                      <Button variant="bordered" className="text-white">
                        Actions
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem
                        key="delete"
                        onClick={() => deleteRole(idx + 1)}
                        className="text-main"
                      >
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UsersListWithContext = () => {
  return (
    <UserListProvider>
      <AddRole />
    </UserListProvider>
  );
};

export default UsersListWithContext;

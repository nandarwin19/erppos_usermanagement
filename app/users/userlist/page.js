"use client";
import React, { useContext, useEffect, useState } from "react";
import UserListProvider, { UserListContext } from "../UserListProvider";
import { TableFilter } from "@/app/table/TableFilter";
import TableBody from "@/app/table/TableBody";
import { Spinner } from "@nextui-org/react";

const UserList = ({ hovered }) => {
  const {
    userData,
    filteredData,
    handleSearchChange,
    searchQuery,
    deleteUser,
  } = useContext(UserListContext);

  return (
    <div
      className={`${
        hovered ? "tablet:w-[40%]" : "tablet:w-[95%]"
      }  min-h-[85vh] w-full overflow-x-scroll rounded-lg shadow-2xl p-8 bg-secondary`}
    >
      <p
        className="text-sm
      mb-4"
      >
        User / UserList
      </p>
      <div className="border py-8 tablet:px-2 rounded-md w-full min-h-[80vh] border-main/70">
        <TableFilter
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />

        {userData.length === 0 ? (
          <div className="flex items-center justify-center w-full h-[60vh]">
            <Spinner size="lg" />
          </div>
        ) : (
          <TableBody
            data={userData}
            filterData={filteredData}
            deleteUser={deleteUser}
          />
        )}
      </div>
    </div>
  );
};

const UsersListWithContext = () => {
  return (
    <UserListProvider>
      <UserList />
    </UserListProvider>
  );
};

export default UsersListWithContext;

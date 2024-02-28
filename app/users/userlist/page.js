"use client";
import React, { useContext } from "react";
import UserListProvider, { UserListContext } from "../UserListProvider";
import { TableFilter } from "@/app/table/TableFilter";

const UserList = () => {
  const { userData } = useContext(UserListContext);
  return (
    <div className="w-full min-h-[85vh] rounded-lg shadow-2xl p-8 bg-secondary">
      <p
        className="text-sm
      mb-4"
      >
        User / UserList
      </p>
      <div className="border py-8 px-2 rounded-md w-full h-[80vh] border-main/70">
        <TableFilter />
        {userData.map((user, index) => (
          <div key={index}></div>
        ))}
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

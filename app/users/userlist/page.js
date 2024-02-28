"use client";
import React, { useContext, useEffect } from "react";
import UserListProvider, { UserListContext } from "../UserListProvider";
import { TableFilter } from "@/app/table/TableFilter";
import TableBody from "@/app/table/TableBody";

const UserList = ({ hovered }) => {
  const { userData } = useContext(UserListContext);

  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);
  return (
    <div
      className={`${
        hovered ? "w-[40%]" : "w-[95%]"
      }  min-h-[85vh] rounded-lg shadow-2xl p-8 bg-secondary`}
    >
      <p
        className="text-sm
      mb-4"
      >
        User / UserList
      </p>
      <div className="border py-8 px-2 rounded-md w-full min-h-[80vh] border-main/70">
        <TableFilter />

        <TableBody data={userData} />
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

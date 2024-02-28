"use client";
import React, { useContext, useEffect, useState } from "react";
import UserListProvider, { UserListContext } from "../UserListProvider";
import { TableFilter } from "@/app/table/TableFilter";
import TableBody from "@/app/table/TableBody";

const UserList = ({ hovered }) => {
  const { userData } = useContext(UserListContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUserData = userData.filter((user) =>
    user?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    console.log(filteredUserData);
  }, [filteredUserData]);

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
        <TableFilter
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />

        <TableBody data={userData} filterData={filteredUserData} />
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

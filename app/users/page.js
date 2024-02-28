import React from "react";
import UserListProvider from "./UserListProvider";
import { TableFilter } from "../table/TableFilter";

const Users = () => {
  return (
    <UserListProvider>
      <TableFilter />
      {/* Render other components or content related to the Users page */}
    </UserListProvider>
  );
};

export default Users;

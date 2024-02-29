import React, { createContext, useEffect, useState } from "react";
import { RolesListInfos, userDatas } from "../utils/data";
import { Spinner } from "@nextui-org/react";

// Create the context
export const UserListContext = createContext();

const UserListProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [roleData, setRoleData] = useState([]);
  const [roleSearchQuery, setRoleSearchQuery] = useState("");
  const [filteredSearchData, setFilteredSearchData] = useState([]);
  //  role
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("RoleData"));
    if (storedData) {
      setRoleData(storedData);
    } else {
      localStorage.setItem("RoleData", JSON.stringify(RolesListInfos));
      setRoleData(RolesListInfos);
    }
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    } else {
      localStorage.setItem("userData", JSON.stringify(userDatas));
      setUserData(userDatas);
      setLoading(false);
    }
  }, []);

  const updateUser = (newUserData) => {
    localStorage.setItem("userData", JSON.stringify(newUserData));
    setUserData(newUserData);
  };

  // update role
  const updateRole = (newRole) => {
    localStorage.setItem("roleData", JSON.stringify(newRole));
    setRoleData(newRole);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
    const filteredList =
      userData &&
      userData.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`;
        return fullName.toLowerCase().includes(e.target.value.toLowerCase());
      });
    setFilteredData(filteredList);
  };

  // role search
  const handleRoleSearchChange = (e) => {
    setRoleSearchQuery(e.target.value);
    const filteredList =
      roleData &&
      roleData.filter((role) => {
        return role.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
    setFilteredSearchData(filteredList);
  };

  const deleteUser = (userId) => {
    // Convert userId to a number
    const indexToDelete = parseInt(userId);

    const updatedUsers = userData.filter(
      (user, index) => index + 1 !== indexToDelete
    );

    setUserData(updatedUsers);
  };

  const deleteRole = (roleId) => {
    const updateRole = roleData.filter((role, idx) => idx + 1 !== roleId);
    setRoleData(updateRole);
  };

  return (
    <UserListContext.Provider
      value={{
        userData,
        setUserData,
        updateUser,
        loading,
        handleSearchChange,
        filteredData,
        searchQuery,
        deleteUser,
        roleData,
        deleteRole,
        handleRoleSearchChange,
        filteredSearchData,
        roleSearchQuery,
        updateRole,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};

export default UserListProvider;

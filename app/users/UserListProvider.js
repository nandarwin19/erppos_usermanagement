import React, { createContext, useEffect, useState } from "react";
import { userDatas } from "../utils/data";
import { Spinner } from "@nextui-org/react";

// Create the context
export const UserListContext = createContext();

const UserListProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  const deleteUser = (userId) => {
    // Convert userId to a number
    const indexToDelete = parseInt(userId);

    const updatedUsers = userData.filter(
      (user, index) => index + 1 !== indexToDelete
    );

 
    setUserData(updatedUsers);
  };

  return (
    <UserListContext.Provider
      value={{
        userData,
        updateUser,
        loading,
        handleSearchChange,
        filteredData,
        searchQuery,
        deleteUser,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};

export default UserListProvider;

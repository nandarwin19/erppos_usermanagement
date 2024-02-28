import React, { createContext, useEffect, useState } from "react";
import { userDatas } from "../utils/data";

// Create the context
export const UserListContext = createContext();

const UserListProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    } else {
      localStorage.setItem("userData", JSON.stringify(userDatas));
      setUserData(userDatas);
    }
  }, []);

  const updateUser = (newUserData) => {
    localStorage.setItem("userData", JSON.stringify(newUserData));
    setUserData(newUserData);
  };

  return (
    <UserListContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserListContext.Provider>
  );
};

export default UserListProvider;

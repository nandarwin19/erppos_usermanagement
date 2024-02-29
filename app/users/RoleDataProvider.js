import React, { createContext, useEffect, useState } from "react";
import { RolesListInfos } from "../utils/data";

export const RoleDataContext = createContext();

const RoleDataProvider = ({ children }) => {
  const [roleData, setRoleData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("RoleData"));
    if (storedData) {
      setRoleData(storedData);
    } else {
      localStorage.setItem("RoleData", JSON.stringify(RolesListInfos));
      setRoleData(RolesListInfos);
    }
  }, []);

  return (
    <RoleDataContext.Provider value={roleData}>
      {children}
    </RoleDataContext.Provider>
  );
};

export default RoleDataProvider;

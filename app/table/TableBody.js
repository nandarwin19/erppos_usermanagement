import React, { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const tableHeader = ["FullName", "Email", "", "Role", "Username", "Status"];

const TableBody = ({ data }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e) => {
    const { checked } = e.target;
    setChecked(checked);
  };

  const sortHandler = () => {
    console.log("sort");
  };

  return (
    <div className="text-sm flex flex-col gap-3 w-full overflow-x-scroll  px-4 ">
      <table className="table w-full">
        <thead>
          <tr className="text-left text-gray-200 uppercase border-b border-dashed border-main/70">
            <th className="px-2 py-4 min-w-[8px]"></th>
            {tableHeader.map((th, index) => (
              <th
                key={index}
                className="px-3 py-4 text-left min-w-[125px] group cursor-pointer"
                onClick={() => sortHandler()}
              >
                <div className="flex items-center text-xs">{th}</div>
              </th>
            ))}
            <th className="px-3 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="capitalize border-b border-dashed border-gray-500"
            >
              <td className="px-3 py-3 min-w-[10px]">
                <Checkbox defaultSelected></Checkbox>
              </td>

              <td className="text-left p-3 min-w-[200px] text-white">
                <div className="w-[76px] text-center">{`${row.firstName} ${row.lastName}`}</div>
              </td>

              {/* Render other table data */}
              {Object.values(row)
                .slice(2)
                .map((value, idx) => (
                  <td
                    key={idx}
                    className="text-left p-3 min-w-[200px] text-white"
                  >
                    <div className="w-[76px] text-center">{value}</div>
                  </td>
                ))}

              {/* Render status */}
              <td className="text-left p-3 min-w-[200px] text-white">
                <div className="w-[76px] text-center">
                  {row.isActive ? "Active" : "Inactive"}
                </div>
              </td>
              <td className="p-3 pl-0">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="text-white">
                      Actions
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="edit" className="text-main">
                      Edit
                    </DropdownItem>
                    <DropdownItem key="delete" className="text-main">
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;

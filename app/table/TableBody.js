import React, { useState } from "react";
import { Checkbox, Spinner } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const tableHeader = ["FullName", "Email", "", "Role", "Username", "Status"];

const TableBody = ({ data, filterData, deleteUser, loading }) => {
  const [checked, setChecked] = useState(false);
  const Router = useRouter();

  const handleCheck = (e) => {
    const { checked } = e.target;
    setChecked(checked);
  };

  const sortHandler = () => {
    console.log("sort");
  };

  return (
    <div className="text-sm flex flex-col gap-3 w-full tablet:px-4 px-0">
      <table className="table w-full">
        <thead>
          <tr className="text-left text-gray-200 uppercase border-b border-dashed border-main/70">
            <th className="px-2 py-4 min-w-[8px]"></th>
            {tableHeader.map((th, index) => (
              <th
                key={index}
                className="px-3 py-4 text-left w-[130px] group cursor-pointer"
                onClick={() => sortHandler()}
              >
                <div className="flex items-center text-xs">{th}</div>
              </th>
            ))}
            <th className="px-3 py-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="relative">
          {(filterData.length > 0 ? filterData : data).map((row, idx) => {
            const editRoute = `/users/${idx + 1}/edit`;

            const deleteId = `${idx + 1}`;

            return (
              <tr
                key={idx}
                className="capitalize border  border-b border-gray-500 border-dashed pb-2 my-4"
              >
                <td className="px-3 py-3 min-w-[10px]">
                  <Checkbox defaultSelected></Checkbox>
                </td>

                <td className="text-left p-3 min-w-[150px] text-white">
                  <div className="w-[125px] text-center">{`${row.firstName} ${row.lastName}`}</div>
                </td>

                {Object.values(row)
                  .slice(2)
                  .map((value, idx) => (
                    <td
                      key={idx}
                      className="text-left p-3 min-w-[60px] text-white"
                    >
                      <div className="w-[60px] text-center">{value}</div>
                    </td>
                  ))}

                {/* Render status */}
                <td className="text-left p-3 min-w-[200px] text-white">
                  <div
                    className={`${
                      row.isActive ? "bg-green-600" : "bg-red-600"
                    } w-[80px] text-center  p-2 px-3`}
                  >
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
                      <DropdownItem
                        onClick={() => Router.push(editRoute)}
                        key="edit"
                        className="text-main"
                      >
                        Edit
                      </DropdownItem>
                      <DropdownItem
                        key="delete"
                        onClick={() => deleteUser(deleteId)}
                        className="text-main"
                      >
                        Delete
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;

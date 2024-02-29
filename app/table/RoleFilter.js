import React, { useContext, useState } from "react";
import UserListProvider, { UserListContext } from "../users/UserListProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { z } from "zod";

export const RoleFilter = ({ searchQuery, handle }) => {
  const { roleData, updateRole } = useContext(UserListContext);
  const router = useRouter();
  const [newRole, setNewRole] = useState({
    name: "",
  });

  const roleSchema = z.object({
    name: z.string().min(3),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      roleSchema.parse(newRole);
      updateRole([...roleData, newRole]);
      toast.success("Create successfully!");
      setNewRole({
        name: "",
      });
    } catch (error) {
      toast.error("Form submisson failed!");
      toast.error(error.message);
    }
  };

  const goToCreate = () => {
    router.push("/users/role");
  };

  const handleRoleChange = (e) => {
    setNewRole({
      name: e.target.value,
    });
  };

  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4 mx-4">
        <div className="flex items-center">
          <div className="w-80 relative group">
            <input
              className="w-80 rounded-md bg-main h-10 px-4  hover:text-white placeholder:text-gray-300 outline-none group-hover:scale-105 duration-300 ease-in-out"
              value={searchQuery}
              onChange={handle}
              placeholder="Search role"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-2 top-3 text-gray-300 group-hover:scale-105 text-sm"
            />
          </div>
        </div>

        <Popover placement="left">
          <PopoverTrigger>
            <Button className="border-0 text-gray-300 bg-[#2d68ac] hover:text-white hover:scale-105 duration-200 ease-in h-10 px-3 rounded-md">
              Add Role
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 p-4 w-80">
                <h3 className="text-main">Create a Role</h3>
                <Input
                  label="Role"
                  labelPlacement="outside"
                  placeholder="Role"
                  value={newRole.name}
                  onChange={handleRoleChange}
                />
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

const UsersListWithContext = () => {
  return (
    <UserListProvider>
      <RoleFilter />
    </UserListProvider>
  );
};

export default UsersListWithContext;

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
} from "@nextui-org/react";
import toast from "react-hot-toast";
import { z } from "zod";
import Input from "../components/Input";

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
      <div className="flex items-center justify-between tablet:flex-wrap gap-4 mb-4 tablet:mx-2 tablet:mr-2">
        <div className="flex items-center">
          <div className="tablet:w-80 w-full relative group">
            <input
              className="tablet:w-80 w-full rounded-md border-0 bg-main h-10 px-4  hover:text-white placeholder:text-gray-300 outline-none group-hover:scale-105 duration-300 ease-in-out"
              value={searchQuery}
              onChange={handle}
              placeholder="Search role"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute tablet:right-2 right-[10%]  top-3 text-gray-300 group-hover:scale-105 text-sm"
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
                  className="bg-[#d4d4d8] placeholder:text-main text-main"
                />
                <Button type="submit" className="border-0">
                  Submit
                </Button>
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

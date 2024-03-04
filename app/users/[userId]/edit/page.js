"use client";

import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "@/app/components/Input";
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { RolesListInfos } from "@/app/utils/data";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@nextui-org/react";
import UserListProvider, { UserListContext } from "../../UserListProvider";
import { useRouter } from "next/navigation";

const EditUser = () => {
  //   const { userData, setUserData } = useContext(UserListContext);
  const { userData, setUserData, updateUser } = useContext(UserListContext);
  const Router = useRouter();
  const { userId } = Router;
  const [isPending, setIsPending] = useState(false);
  const [editUserData, setEditUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isActive: false,
    role: "",
    username: "",
  });

  const userSchema = z.object({
    firstName: z.string().min(2).max(10),
    lastName: z.string().min(2).max(10),
    username: z.string().min(4).max(10),
    email: z.string().email(),
    isActive: z.boolean(),
    role: z.string(),
  });

  useEffect(() => {
    if (userData && userId) {
      const userIdNum = parseInt(userId, 10);
      const foundUser = userData[userIdNum - 1];
      setUserData(foundUser);
      setEditUserData({
        firstName: foundUser?.firstName,
        lastName: foundUser?.lastName,
        email: foundUser?.email,
        isActive: foundUser?.isActive,
        username: foundUser?.username,
        role: foundUser?.role,
      });
    }
  }, [userData, userId, setUserData]);

  const goBack = () => {
    Router.push("/users/userlist");
  };

  const handleSubmit = () => {};
  const handleUserDataChange = () => {};

  return (
    <div>
      <Toaster position="top-center" />
      <div className="w-full h-full">
        <div className="my-2">
          <div
            onClick={goBack}
            leftIcon={faArrowLeft}
            className="bg-transparent cursor-pointer text-sm text-gray-400 "
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mx-1" />
            Back
          </div>
        </div>
        <div className="bg-secondary rounded-xl px-8">
          <div className="pt-6">
            <h1 className="font-semibold text-xl text-gray-300">Edit user</h1>

            {/* <Breadcrumbs /> */}
          </div>
          <form onSubmit={handleSubmit} className="py-8">
            <div className="grid grid-cols-5 gap-10">
              <div className="col-span-2">
                <Input
                  labelText="First Name"
                  placeholder="First Name"
                  required
                  type="text"
                  name="firstName"
                  value={editUserData.firstName}
                  onChange={handleUserDataChange}
                  rule="required min 2 max 10"
                />
              </div>
              <div className="col-span-2">
                <Input
                  labelText="Last Name"
                  type="text"
                  name="lastName"
                  value={editUserData.lastName}
                  onChange={handleUserDataChange}
                  placeholder="Last Name"
                  rule="required min 2 max 10"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-3">
                  <Input
                    type="email"
                    name="email"
                    value={editUserData.email}
                    onChange={handleUserDataChange}
                    labelText="Email Address"
                    placeholder="username@domain.xyz"
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    type="text"
                    name="username"
                    value={editUserData.username}
                    onChange={handleUserDataChange}
                    labelText="Username"
                    placeholder="john_lay"
                    rule="required min 4 max 10"
                  />
                </div>

                <div className="col-span-2 mt-3">
                  <div className="flex flex-col">
                    <label className="text-xs text-gray-200 mb-1">Roles</label>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button
                          variant="bordered"
                          className="rounded-lg text-white text-left bg-main border-0"
                        >
                          <p className="text-left">Roles</p>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Dynamic Actions">
                        {RolesListInfos.map((role, index) => (
                          <DropdownItem
                            key={index}
                            className="text-main"
                            onClick={() =>
                              handleUserDataChange({
                                target: { name: "role", value: role.name },
                              })
                            }
                          >
                            {role.name}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-5 mb-7">
              <Checkbox
                type="checkbox"
                name="isActive"
                checked={editUserData.isActive}
                onChange={handleUserDataChange}
              />
              <div className="flex flex-col">
                <h1 className="text-sm text-gray-400">Is Active?</h1>
                <p className="text-xs text-gray-500">
                  User account is activate or deactivate
                </p>
              </div>
            </div>
            <Button
              className="bg-main w-20 text-gray-200"
              onClick={() => setIsPending(true)}
              type="submit"
            >
              Save
              {isPending && <Spinner size="sm" />}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

const UsersListWithContext = () => {
  return (
    <UserListProvider>
      <EditUser />
    </UserListProvider>
  );
};

export default UsersListWithContext;

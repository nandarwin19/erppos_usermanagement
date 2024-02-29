"use client";

import React, { useContext, useState } from "react";
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
import UserListProvider, { UserListContext } from "../UserListProvider";
import Breadcrumbs from "@/app/components/BreadCrumb";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "@nextui-org/react";

const CreateUser = () => {
  const { userData, updateUser } = useContext(UserListContext);
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const [newUserData, setNewUserData] = useState({
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

  const handleUserDataChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    if (name === "role") {
      setNewUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    } else {
      setNewUserData((prevUserData) => ({
        ...prevUserData,
        [name]: newValue,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      userSchema.parse(newUserData);
      updateUser([...userData, newUserData]);
      setIsPending(false);
      toast.success("Create successfully!");
      setNewUserData({
        firstName: "",
        lastName: "",
        email: "",
        isActive: false,
        role: "",
        username: "",
      });
    } catch (error) {
      setIsPending(false);
      toast.error("Form submission failed");
      console.error("Form submission error:", error.errors);
    }
  };

  const goBack = () => {
    router.push("/users/userlist");
  };

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
            <h1 className="font-semibold text-xl text-gray-300">
              Create User Account
            </h1>

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
                  value={newUserData.firstName}
                  onChange={handleUserDataChange}
                  rule="required min 2 max 10"
                />
              </div>
              <div className="col-span-2">
                <Input
                  labelText="Last Name"
                  type="text"
                  name="lastName"
                  value={newUserData.lastName}
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
                    value={newUserData.email}
                    onChange={handleUserDataChange}
                    labelText="Email Address"
                    placeholder="username@domain.xyz"
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    type="text"
                    name="username"
                    value={newUserData.username}
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
                checked={newUserData.isActive}
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
              Create
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
      <CreateUser />
    </UserListProvider>
  );
};

export default UsersListWithContext;

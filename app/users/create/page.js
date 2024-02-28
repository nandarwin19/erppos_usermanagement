"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "@/app/components/Input";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { RolesListInfos } from "@/app/utils/data";
import { z } from "zod";

const Page = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    username: "",
    role: "",
    isActive: false,
  });

  const userSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    username: z.string().min(4),
    emailAddress: z.string().email(),
    isActive: z.boolean(),
    role: z.string(),
  });

  const handleUserDataChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    if (name === "role") {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: value,
      }));
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [name]: newValue,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      userSchema.parse(userData);
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("Form submitted with data:", userData);
      toast.success("Create successfully!");
    } catch (error) {
      toast.error("Form submission failed");
      console.error("Form submission error:", error.errors);
    }
  };

  const goBack = () => {};

  return (
    <div>
      <Toaster position="top-center" />
      <div className="w-full h-full">
        <div className="my-2">
          <p
            onClick={goBack}
            leftIcon={faArrowLeft}
            className="bg-transparent text-gray-400 "
          >
            Back
          </p>
        </div>
        <div className="bg-secondary rounded-xl px-8">
          <div className="pt-6">
            <h1 className="font-semibold text-xl text-gray-300">
              Create User Account
            </h1>
            <div>users / create</div>
          </div>
          <form onSubmit={handleSubmit} className="py-4">
            <div className="grid grid-cols-5 gap-10">
              <div>
                <Input
                  labelText="Prefix:"
                  type="text"
                  name="prefix"
                  value={userData.prefix}
                  onChange={handleUserDataChange}
                  placeholder="Mr / Mrs / Miss"
                />
              </div>
              <div className="col-span-2">
                <Input
                  labelText="First Name"
                  placeholder="First Name"
                  required
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleUserDataChange}
                />
              </div>
              <div className="col-span-2">
                <Input
                  labelText="Last Name"
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleUserDataChange}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="grid grid-cols-12 gap-10">
                <div className="col-span-3">
                  <Input
                    type="email"
                    name="emailAddress"
                    value={userData.emailAddress}
                    onChange={handleUserDataChange}
                    labelText="Email Address"
                    placeholder="username@domain.xyz"
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleUserDataChange}
                    labelText="Username"
                    placeholder="john_lay"
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
              <Input
                type="checkbox"
                name="isActive"
                checked={userData.isActive}
                onChange={handleUserDataChange}
              />
              <div className="flex flex-col">
                <h1 className="text-sm text-gray-400">Is Active?</h1>
                <p className="text-xs text-gray-500">
                  User account is activate or deactivate
                </p>
              </div>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;

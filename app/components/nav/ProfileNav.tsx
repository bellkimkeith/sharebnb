"use client";

import React, { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import ProfileIcon from "../icons/ProfileIcon";
import MenuLink from "./MenuLink";

const ProfileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button
        className="flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
        <ProfileIcon />
      </button>

      {isOpen && (
        <div className="flex flex-col cursor-pointer w-[220px] absolute top-[50px] right-0 bg-white border rounded-xl shadow-md">
          <MenuLink label="Login" onClick={() => console.log("clicked")} />
          <MenuLink label="Signup" onClick={() => console.log("clicked")} />
        </div>
      )}
    </div>
  );
};

export default ProfileNav;

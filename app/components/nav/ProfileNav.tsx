"use client";

import React, { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import ProfileIcon from "../icons/ProfileIcon";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";

const ProfileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
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
          <MenuLink
            label="Login"
            onClick={() => {
              setIsOpen(false);
              loginModal.open();
            }}
          />
          <MenuLink
            label="Signup"
            onClick={() => {
              setIsOpen(false);
              signupModal.open();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileNav;

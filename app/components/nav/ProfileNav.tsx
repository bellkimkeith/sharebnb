"use client";

import React, { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import ProfileIcon from "../icons/ProfileIcon";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import LogoutButton from "../buttons/LogoutButton";
import { useRouter } from "next/navigation";

type ProfileNavProps = {
  userId: string | undefined;
};

const ProfileNav = ({ userId }: ProfileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  const router = useRouter();

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
          {!userId ? (
            <>
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
            </>
          ) : (
            <>
              <MenuLink
                label="My properties"
                onClick={() => {
                  setIsOpen(false);
                  router.push(`/my-properties`);
                }}
              />
              <LogoutButton onClick={() => setIsOpen(false)} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileNav;

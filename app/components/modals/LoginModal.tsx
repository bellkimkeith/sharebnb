"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";
import Modal from "./Modal";
import CustomButton from "../form/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const content = (
    <form action="" className="space-y-4">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
      />
      <div className="p-4 bg-sharebnb text-white rounded-xl opacity-80">
        Error message
      </div>
      <CustomButton label="Submit" onClick={() => console.log("login")} />
    </form>
  );
  return (
    <Modal
      title="Login"
      content={content}
      isOpen={loginModal.isOpen}
      close={loginModal.close}
    />
  );
};

export default LoginModal;

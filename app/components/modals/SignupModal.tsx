"use client";

import useSignupModal from "@/app/hooks/useSignupModal";
import React from "react";
import Modal from "./Modal";
import CustomButton from "../form/CustomButton";

const SignupModal = () => {
  const signupModal = useSignupModal();
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
      <input
        type="repeatpassword"
        name="repeatpassword"
        id="repeatpassword"
        placeholder="Repeat Password"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
      />
      <div className="p-4 bg-sharebnb text-white rounded-xl opacity-80">
        Error message
      </div>
      <CustomButton label="Submit" onClick={() => console.log("Signup")} />
    </form>
  );
  return (
    <Modal
      title="Signup"
      content={content}
      isOpen={signupModal.isOpen}
      close={signupModal.close}
    />
  );
};

export default SignupModal;

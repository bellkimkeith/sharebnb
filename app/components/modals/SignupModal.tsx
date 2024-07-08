"use client";

import useSignupModal from "@/app/hooks/useSignupModal";
import React, { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../form/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { error } from "console";

const SignupModal = () => {
  const router = useRouter();
  const signupModal = useSignupModal();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSignUpSubmit = async () => {
    const formData = {
      email: email,
      password1: password,
      password2: confirmPassword,
    };

    const response = await apiService.post(
      "/api/auth/register/",
      JSON.stringify(formData)
    );

    if (response.access) {
      // handleLogin()
      signupModal.close();
      router.push("/");
      setErrors([]);
    } else {
      const responseErrors: string[] = [];
      for (const [key, value] of Object.entries(response)) {
        responseErrors.push(`${key}: ${value}`);
      }

      setErrors(responseErrors);
    }
  };

  const content = (
    <form className="space-y-4">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
      />
      <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        name="repeatpassword"
        id="repeatpassword"
        placeholder="Repeat Password"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
      />
      {errors.map((error, index) => (
        <div
          key={index}
          className="p-4 bg-sharebnb text-white rounded-xl opacity-80"
        >
          {error}
        </div>
      ))}

      <CustomButton label="Submit" onClick={handleSignUpSubmit} />
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

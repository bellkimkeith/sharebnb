"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import React, { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../form/CustomButton";
import { useRouter } from "next/navigation";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const handleLoginSubmit = async () => {
    const formData = {
      email: email,
      password: password,
    };

    const response = await apiService.postWithoutToken(
      "/api/auth/login/",
      JSON.stringify(formData)
    );

    if (response.access) {
      await handleLogin(response.user.pk, response.access, response.refresh);
      loginModal.close();
      setErrors([]);
      router.push("/");
    } else {
      const responseErrors: string[] = [];
      for (const [key, value] of Object.entries(response)) {
        if (key !== "non_field_errors") {
          responseErrors.push(`${key}: ${value}`);
        } else {
          responseErrors.push(`${value}`);
        }
      }

      setErrors(responseErrors);
    }
  };

  const content = (
    <form className="space-y-4">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        className="w-full h-[54px] border border-gray-300 rounded-xl px-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors &&
        errors.length > 0 &&
        errors.map((error, index) => (
          <div
            key={index}
            className="p-4 bg-sharebnb text-white rounded-xl opacity-80"
          >
            {error}
          </div>
        ))}
      <CustomButton label="Submit" onClick={handleLoginSubmit} />
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

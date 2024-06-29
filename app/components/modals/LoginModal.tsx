"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import React from "react";
import Modal from "./Modal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const content = <h2>Welcome to ShareBnb please login your account</h2>;
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

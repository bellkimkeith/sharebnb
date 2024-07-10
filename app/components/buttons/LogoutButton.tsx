"use client";

import React from "react";
import MenuLink from "../nav/MenuLink";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/app/lib/actions";

type LogoutButtonProps = {
  onClick: () => void;
};

const LogoutButton = ({ onClick }: LogoutButtonProps) => {
  const router = useRouter();
  const submitLogout = async () => {
    await resetAuthCookies();
    onClick();
    router.push("/");
  };
  return <MenuLink label="Logout" onClick={submitLogout} />;
};

export default LogoutButton;

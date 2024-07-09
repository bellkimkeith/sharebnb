"use client";

import React from "react";
import MenuLink from "../nav/MenuLink";
import { useRouter } from "next/navigation";
import { resetAuthCookies } from "@/app/lib/actions";

const LogoutButton = () => {
  const router = useRouter();
  const submitLogout = async () => {
    resetAuthCookies();
    router.push("/");
  };
  return <MenuLink label="Logout" onClick={submitLogout} />;
};

export default LogoutButton;

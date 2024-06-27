"use client";
import React from "react";

type MenuLinkProps = {
  label: string;
  onClick: () => void;
};

const MenuLink = ({ label, onClick }: MenuLinkProps) => {
  return (
    <div className="px-5 py-2 hover:bg-gray-100 transition" onClick={onClick}>
      {label}
    </div>
  );
};

export default MenuLink;

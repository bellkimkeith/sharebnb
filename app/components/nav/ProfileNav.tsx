import React from "react";
import MenuIcon from "../icons/MenuIcon";
import ProfileIcon from "../icons/ProfileIcon";

const ProfileNav = () => {
  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button className="flex items-center gap-2">
        <MenuIcon />
        <ProfileIcon />
      </button>
    </div>
  );
};

export default ProfileNav;

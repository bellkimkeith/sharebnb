import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchFilter from "./SearchFilter";
import ProfileNav from "./ProfileNav";
import AddPropertyButton from "./AddPropertyButton";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b-[0.3px] bg-white bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-0 z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center gap-8">
          <Link
            href={"/"}
            className="hidden sm:flex flex-row items-center text-sharebnb font-semibold text-lg lg:text-2xl"
          >
            <Image src={"/logo.png"} alt="logo" width={36} height={36} />
            sharebnb
          </Link>
          <div className="flex space-x-6">
            <SearchFilter />
          </div>
          <div className="flex items-center space-x-6">
            <AddPropertyButton />
            <ProfileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

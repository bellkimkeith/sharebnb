import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchFilter from "./SearchFilter";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b-[0.3px] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 z-10">
      <div className="max-w-[1500px] px-6">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="flex flex-row items-center text-sharebnb font-semibold text-2xl"
          >
            <Image src={"/logo.png"} alt="logo" width={36} height={36} />
            sharebnb
          </Link>
          <div className="flex space-x-6">
            <SearchFilter />
          </div>
          <div className="flex items-center space-x-6">menu</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

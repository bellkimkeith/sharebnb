import React from "react";
import SearchIcon from "../icons/SearchIcon";

const SearchFilter = () => {
  return (
    <div className="h-12 lg:h-16 flex flex-row items-center justify-between lg:border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col justify-center w-64 h-16 px-6 rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm">Search Location</p>
          </div>
          <div className="flex flex-col justify-center h-16 px-6 rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm">Select Date</p>
          </div>
          <div className="flex flex-col justify-center h-16 px-6 rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm">Select Date</p>
          </div>
          <div className="flex flex-col justify-center h-16 px-6 rounded-full hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Who</p>
            <p className="text-sm">Add Guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 bg-sharebnb hover:bg-sharebnb-dark transition rounded-full text-white cursor-pointer">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

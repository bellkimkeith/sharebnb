import React from "react";

const SearchFilter = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-between border rounded-full">
      <div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col justify-center w-64 h-16 px-6 rounded-full hover:bg-gray-100">
            <p className="text-xs font-semibold">Where</p>
            <p className="text-sm">Search Location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;

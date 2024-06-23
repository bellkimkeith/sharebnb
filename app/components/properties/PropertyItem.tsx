import Image from "next/image";
import React from "react";

const PropertyItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="overflow-hidden aspect-square rounded-xl relative">
        <Image
          src={"/properties/beach-1.jpg"}
          alt=""
          width={768}
          height={768}
          className="object-cover hover:scale-110 transition"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">name</p>
        <p className="text-sm text-gray-500">
          <strong>price</strong> per night
        </p>
      </div>
    </div>
  );
};

export default PropertyItem;

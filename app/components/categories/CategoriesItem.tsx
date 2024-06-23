import Image from "next/image";
import React from "react";

type CategoryProp = {
  label: string;
  img: string;
  alt: string;
};

const CategoriesItem = ({ label, img, alt }: CategoryProp) => {
  return (
    <div className="pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-300 cursor-pointer">
      <Image src={img} width={24} height={24} alt={alt} />
      <span className="text-xs font-semibold">{label}</span>
    </div>
  );
};

export default CategoriesItem;

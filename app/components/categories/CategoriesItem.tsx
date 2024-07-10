import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type CategoryProp = {
  label: string;
  img: string;
  alt: string;
  onClick?: () => void;
  currentCategory?: string;
};

const CategoriesItem = ({
  label,
  img,
  alt,
  onClick,
  currentCategory,
}: CategoryProp) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "pb-3 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-300 cursor-pointer",
        { "border-gray-800": currentCategory === label }
      )}
    >
      <Image src={img} width={24} height={24} alt={alt} />
      <span className="text-xs font-semibold">{label}</span>
    </div>
  );
};

export default CategoriesItem;

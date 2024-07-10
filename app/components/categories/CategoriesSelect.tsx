import React from "react";
import CategoriesItem from "./CategoriesItem";
import { CATEGORIES } from "@/constants/categories";

type CategoriesSelectProps = {
  dataCategory: string;
  setCategory: (category: string) => void;
};

const CategoriesSelect = ({
  dataCategory,
  setCategory,
}: CategoriesSelectProps) => {
  return (
    <div className="flex items-center space-x-12 pt-3 pb-6 cursor-pointer">
      {CATEGORIES.map((item, index) => (
        <CategoriesItem
          key={index}
          label={item.label}
          img={item.img}
          alt={item.alt}
          onClick={() => setCategory(item.label)}
          currentCategory={dataCategory}
        />
      ))}
    </div>
  );
};

export default CategoriesSelect;

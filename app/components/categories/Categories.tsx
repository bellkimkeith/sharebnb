import React from "react";
import CategoriesItem from "./CategoriesItem";
import { CATEGORIES } from "@/constants/categories";

const Categories = () => {
  return (
    <div className="pt-3 flex items-center pb-6 space-x-12 cursor-pointer">
      {CATEGORIES.map((item, index) => (
        <CategoriesItem
          key={index}
          label={item.label}
          img={item.img}
          alt={item.alt}
        />
      ))}
    </div>
  );
};

export default Categories;

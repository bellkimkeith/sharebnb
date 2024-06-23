import React from "react";
import PropertyItem from "./PropertyItem";

const PropertiesList = () => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
    </div>
  );
};

export default PropertiesList;

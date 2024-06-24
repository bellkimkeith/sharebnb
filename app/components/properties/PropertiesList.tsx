import React from "react";
import PropertyItem from "./PropertyItem";
import { cn } from "@/lib/utils";

const PropertiesList = ({ inOwnerPage }: { inOwnerPage?: boolean }) => {
  return (
    <div
      className={cn(
        "mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6",
        { "mt-0 lg:grid-cols-3": inOwnerPage }
      )}
    >
      <PropertyItem />
      <PropertyItem />
      <PropertyItem />
    </div>
  );
};

export default PropertiesList;

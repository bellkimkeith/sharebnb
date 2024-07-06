import Image from "next/image";
import React from "react";
import { PropertyType } from "./PropertiesList";

type PropertyItemProp = {
  property: PropertyType;
};

const PropertyItem = ({ property }: PropertyItemProp) => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          src={property.image_url}
          alt=""
          fill
          className="object-cover hover:scale-110 transition"
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
        <p className="text-sm text-gray-500">
          <strong>₱{property.price_per_night}</strong> per night
        </p>
      </div>
    </div>
  );
};

export default PropertyItem;

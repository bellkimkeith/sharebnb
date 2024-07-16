import Image from "next/image";
import React from "react";
import { PropertyType } from "./PropertiesList";

const PropertyDetails = ({ property }: { property: PropertyType }) => {
  return (
    <div className="col-span-3 pr-6 py-6">
      <h1 className="mb-4 text-4xl">{property.title}</h1>
      <span className="mb-6 block text-lg text-gray-600">
        {property.guests} guests - {property.bedrooms} bedrooms -{" "}
        {property.bathrooms} bathrooms
      </span>
      <hr />
      <div className="py-6 flex items-center space-x-4">
        {property.landlord.avatar_url && (
          <Image
            src={property.landlord.avatar_url}
            alt="owner photo"
            width={50}
            height={50}
            className="object-cover aspect-square rounded-full"
          />
        )}
        <span>
          <strong>{property.landlord.name}</strong> is your host
        </span>
      </div>
      <hr />
      <div className="mt-6 text-lg">{property.description}</div>
    </div>
  );
};

export default PropertyDetails;

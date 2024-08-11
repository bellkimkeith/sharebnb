"use client";

import React, { useEffect, useState } from "react";
import PropertyItem from "./PropertyItem";
import { cn } from "@/lib/utils";
import apiService from "@/app/services/apiService";
import { url } from "inspector";

type UserType = {
  id: string;
  name: string;
  avatar_url: string;
};

export type PropertyType = {
  id: string;
  price_per_night: number;
  image_url: string;
  title: string;
  description: string;
  bathrooms: string;
  bedrooms: string;
  guests: string;
  landlord: UserType;
};

const PropertiesList = ({
  inOwnerPage,
  landlord_id,
}: {
  inOwnerPage?: boolean;
  landlord_id?: string;
}) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    const getProperties = async () => {
      let url = "/api/properties/";

      if (landlord_id) {
        url += `?landlord_id=${landlord_id}`;
      }

      const properties = await apiService.get(url);
      setProperties(properties.data);
    };
    getProperties();
  }, [landlord_id]);

  return (
    <div
      className={cn(
        "mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6",
        { "mt-0 lg:grid-cols-3": inOwnerPage }
      )}
    >
      {properties.map((property) => (
        <PropertyItem key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesList;

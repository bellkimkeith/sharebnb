"use client";

import React, { useEffect, useState } from "react";
import PropertyItem from "./PropertyItem";
import { cn } from "@/lib/utils";
import { json } from "stream/consumers";
import { error } from "console";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  price_per_night: number;
  image_url: string;
  title: string;
};

const PropertiesList = ({ inOwnerPage }: { inOwnerPage?: boolean }) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    const getProperties = async () => {
      const properties = await apiService.get("/api/properties/");
      setProperties(properties.data);
    };
    getProperties();
  }, []);

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

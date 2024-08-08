import PropertyDetails from "@/app/components/properties/PropertyDetails";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import Image from "next/image";
import React from "react";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

const PropertyDetailsPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}`);
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
        <Image
          fill
          src={property.image_url}
          alt="property image"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <PropertyDetails property={property} />
        <ReservationSideBar property={property} userId={userId} />
      </div>
    </main>
  );
};

export default PropertyDetailsPage;

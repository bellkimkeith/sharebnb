import PropertyDetails from "@/app/components/properties/PropertyDetails";
import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import Image from "next/image";
import React from "react";

const PropertyDetailsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative mb-4">
        <Image
          fill
          src={"/properties/beach-1.jpg"}
          alt="beach house"
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <PropertyDetails />
        <ReservationSideBar />
      </div>
    </main>
  );
};

export default PropertyDetailsPage;

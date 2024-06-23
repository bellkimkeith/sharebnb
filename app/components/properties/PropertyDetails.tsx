import Image from "next/image";
import React from "react";

const PropertyDetails = () => {
  return (
    <div className="col-span-3 pr-6 py-6">
      <h1 className="mb-4 text-4xl">property name</h1>
      <span className="mb-6 block text-lg text-gray-600">
        4 guests - 2 bedrooms - 2 bathrooms
      </span>
      <hr />
      <div className="py-6 flex items-center space-x-4">
        <Image
          src={"/properties/owner-1.jpg"}
          alt="owner photo"
          width={50}
          height={50}
          className="object-cover aspect-square rounded-full"
        />
        <span>
          <strong>Jane Snow</strong> is your host
        </span>
      </div>
      <hr />
      <div className="mt-6 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        delectus fugit provident culpa dicta illum sit molestiae tempora,
        tempore ipsam, distinctio rem eaque adipisci porro nihil soluta voluptas
        iusto error!
      </div>
    </div>
  );
};

export default PropertyDetails;

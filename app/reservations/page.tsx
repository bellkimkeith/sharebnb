import Image from "next/image";
import React from "react";

const ReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Reservations</h1>
      <div className="space-y-4 ">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 md border border-gray-300 shadow-md rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src={"/properties/beach-1.jpg"}
                fill
                alt="reserved property photo"
                className="object-cover hover:scale-110 transition"
              />
            </div>
          </div>
          <div className="cols-span-1 md:col-span-3">
            <div className="space-y-2">
              <h2 className="mb-4 text-xl">Property name</h2>
              <p>
                <strong>Check in date:</strong> 06/25/2024
              </p>
              <p>
                <strong>Check out date:</strong> 06/25/2024
              </p>
              <p>
                <strong>Number of nights:</strong> 3
              </p>
              <p>
                <strong>Total price:</strong> ₱30,000
              </p>
            </div>
            <div className="mt-6 max-w-fit py-2 px-4 bg-sharebnb hover:bg-sharebnb-dark cursor-pointer rounded-xl text-white">
              Go to property
            </div>
          </div>
        </div>

        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 md border border-gray-300 shadow-md rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src={"/properties/beach-1.jpg"}
                fill
                alt="reserved property photo"
                className="object-cover hover:scale-110 transition"
              />
            </div>
          </div>
          <div className="cols-span-1 md:col-span-3">
            <div className="space-y-2">
              <h2 className="mb-4 text-xl">Property name</h2>
              <p>
                <strong>Check in date:</strong> 06/25/2024
              </p>
              <p>
                <strong>Check out date:</strong> 06/25/2024
              </p>
              <p>
                <strong>Number of nights:</strong> 3
              </p>
              <p>
                <strong>Total price:</strong> ₱30,000
              </p>
            </div>
            <div className="mt-6 max-w-fit py-2 px-4 bg-sharebnb hover:bg-sharebnb-dark cursor-pointer rounded-xl text-white">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReservationsPage;

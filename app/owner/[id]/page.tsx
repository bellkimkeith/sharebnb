import ContactButton from "@/app/components/buttons/ContactButton";
import PropertiesList from "@/app/components/properties/PropertiesList";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Image from "next/image";
import React from "react";

const OwnerPage = async ({ params }: { params: { id: string } }) => {
  const landlord = await apiService.get(`/api/auth/${params.id}`);
  const userId = await getUserId();

  console.log("asdasda", landlord);

  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src={landlord.avatar_url}
              alt="owner photo"
              width={200}
              height={200}
              className="object-cover aspect-square rounded-full"
            />
            <h1 className="mt-6 text-2xl text-center">{landlord.name}</h1>
            {userId !== params.id && <ContactButton />}
          </div>
        </aside>
        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
          <PropertiesList inOwnerPage landlord_id={params.id} />
        </div>
      </div>
    </main>
  );
};

export default OwnerPage;

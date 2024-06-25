import React from "react";
import PropertiesList from "../components/properties/PropertiesList";

const MyPropertiesPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Properties</h1>
      <PropertiesList />
    </main>
  );
};

export default MyPropertiesPage;

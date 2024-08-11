import PropertiesList from "../components/properties/PropertiesList";
import { getUserId } from "../lib/actions";

const MyPropertiesPage = async () => {
  const userId = await getUserId();

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Properties</h1>
      <PropertiesList landlord_id={userId} />
    </main>
  );
};

export default MyPropertiesPage;

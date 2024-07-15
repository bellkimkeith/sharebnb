"use client";

import usePropertyModal from "@/app/hooks/usePropertyModal";
import React, { ChangeEvent, useState } from "react";
import Modal from "./Modal";
import CustomButton from "../form/CustomButton";
import CategoriesSelect from "../categories/CategoriesSelect";
import SelectCountry, { SelectCountryValue } from "../form/SelectCountry";
import Image from "next/image";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

type PropertyModalFormData = {
  category: string;
  name: string;
  description: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  guests: string;
  country: SelectCountryValue | undefined;
  image: File | null;
};

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<PropertyModalFormData>({
    category: "",
    name: "",
    description: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    guests: "",
    country: undefined,
    image: null,
  });
  const [errors, setErrors] = useState<string[]>([]);
  const addPropertyModal = usePropertyModal();
  const router = useRouter();

  const setCategory = (category: string) => {
    setFormData({ ...formData, category: category });
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];

      setFormData({ ...formData, image: tmpImage });
    }
  };

  const submitForm = async () => {
    const isFormFilled =
      Object.values(formData).filter(
        (item) => item !== "" && item !== null && item !== undefined
      ).length > 0;

    if (isFormFilled) {
      const data = new FormData();
      data.append("category", formData.category);
      data.append("title", formData.name);
      data.append("description", formData.description);
      data.append("price_per_night", formData.price);
      data.append("bedrooms", formData.bedrooms);
      data.append("bathrooms", formData.bathrooms);
      data.append("guests", formData.guests);
      data.append("country", formData.country?.label!);
      data.append("country_code", formData.country?.value!);
      data.append("image", formData.image!);

      const response = await apiService.post("/api/properties/create/", data);

      if (response.success) {
        router.push("/");
        addPropertyModal.close();
      } else {
        const responseErrors: any = Object.values(response)[0];
        const parsedErrors = JSON.parse(responseErrors);
        const formattedErrors: string[] = [];
        Object.keys(parsedErrors).map((key) => {
          const formattedKey = key
            .toLowerCase()
            .replace(/_/g, " ")
            .replace(/(?: |\b)(\w)/g, function (key) {
              return key.toUpperCase();
            });
          formattedErrors.push(`${formattedKey} field is required`);
        });
        setErrors(formattedErrors);
      }
    }
  };

  const content = (
    <>
      {currentStep === 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose category</h2>
          <CategoriesSelect
            dataCategory={formData.category}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep === 2 ? (
        <>
          <h2 className="mb-4 text-2xl border-b-2 pb-2">
            Describe your property
          </h2>

          <div className="pt-2 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-600"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full h-[200px] p-4 rounded-xl border border-gray-600"
              ></textarea>
            </div>
          </div>

          <CustomButton
            className="mb-2 bg-gray-800 hover:bg-gray-600"
            label="Previous"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep === 3 ? (
        <>
          <h2 className="mb-4 text-2xl border-b-2 pb-2">Property Features</h2>

          <div className="pt-2 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="price">Price per night</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-600"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="bedroom">Bedrooms</label>
              <input
                type="number"
                name="bedroom"
                value={formData.bedrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bedrooms: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-600"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="bathroom">Bathrooms</label>
              <input
                type="number"
                name="bathroom"
                value={formData.bathrooms}
                onChange={(e) =>
                  setFormData({ ...formData, bathrooms: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-600"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="guests">Maximum number of guests</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-600"
              />
            </div>
          </div>

          <CustomButton
            className="mb-2 bg-gray-800 hover:bg-gray-600"
            label="Previous"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
        </>
      ) : currentStep === 4 ? (
        <>
          <div className="pt-2 pb-6 space-y-4">
            <SelectCountry
              value={formData.country}
              onChange={(value) => setFormData({ ...formData, country: value })}
            />
          </div>

          <CustomButton
            className="mb-2 bg-gray-800 hover:bg-gray-600"
            label="Previous"
            onClick={() => setCurrentStep(3)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
        </>
      ) : (
        <>
          <h2 className="mb-4 text-2xl border-b-2 pb-2">Property Image</h2>

          <div className="pt-2 pb-6 space-y-4">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} />
            </div>
            {formData.image && (
              <div className="w-[200px] h-[150px] relative">
                <Image
                  fill
                  alt="property image"
                  src={URL.createObjectURL(formData.image)}
                  className="size-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          {errors.map((error, index) => {
            return (
              <div
                key={index}
                className="p-2 mb-2 bg-sharebnb text-white text-xs rounded-xl opacity-80"
              >
                {error}
              </div>
            );
          })}

          <CustomButton
            className="mb-2 bg-gray-800 hover:bg-gray-600"
            label="Previous"
            onClick={() => setCurrentStep(4)}
          />
          <CustomButton label="Submit" onClick={submitForm} />
        </>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        title="Add Property"
        content={content}
      />
    </>
  );
};

export default AddPropertyModal;

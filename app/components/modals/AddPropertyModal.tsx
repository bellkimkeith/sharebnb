"use client";

import usePropertyModal from "@/app/hooks/usePropertyModal";
import React, { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../form/CustomButton";
import CategoriesSelect from "../categories/CategoriesSelect";

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const addPropertyModal = usePropertyModal();

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const content = (
    <>
      <h2 className="mb-6 text-2xl">Choose category</h2>
      <CategoriesSelect
        dataCategory={dataCategory}
        setCategory={(category) => setCategory(category)}
      />
      <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
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

"use client";

import useLoginModal from "@/app/hooks/useLoginModal";
import usePropertyModal from "@/app/hooks/usePropertyModal";
import React, { useCallback, useEffect } from "react";

type AddPropertyButtonProps = {
  userId: string | undefined;
};

const AddPropertyButton = ({ userId }: AddPropertyButtonProps) => {
  const addPropertyModal = usePropertyModal();
  const loginModal = useLoginModal();
  const sharebnbYourHome = useCallback(() => {
    if (userId) {
      addPropertyModal.open();
    } else {
      loginModal.open();
    }
  }, [userId, addPropertyModal, loginModal]);

  return (
    <div
      onClick={sharebnbYourHome}
      className="p-2 min-w-fit text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer"
    >
      ShareBnb your home
    </div>
  );
};

export default AddPropertyButton;

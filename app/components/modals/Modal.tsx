"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";
import CloseIcon from "../icons/CloseIcon";

type ModalProps = {
  title: string;
  content: React.ReactElement;
  isOpen: boolean;
  close: () => void;
};

const Modal = ({ title, content, isOpen, close }: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setTimeout(() => close(), 400);
  }, [close]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center fixed bg-black/50 z-50 inset-0">
      <div className="relative w-[90%] md:[80%] lg:w-[700px] my-6 mx-auto h-auto">
        <div
          className={cn(
            "h-full transform translate-y-0 duration-300 opacity-100",
            {
              "translate-y-full opacity-0": !showModal,
            }
          )}
        >
          <div className="relative flex flex-col w-full h-auto rounded-xl bg-white">
            <header className="relative flex items-center justify-center p-6 rounded-t border-b">
              <div
                className="absolute right-3 cursor-pointer hover:bg-gray-100 p-2 rounded-full"
                onClick={handleCloseModal}
              >
                <CloseIcon />
              </div>
              <h2 className="text-lg font-bold">{title}</h2>
            </header>
            <section className="p-6">{content}</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

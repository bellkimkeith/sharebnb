import React from "react";

type CustomButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

const CustomButton = ({ label, onClick, className }: CustomButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-2 bg-sharebnb hover:bg-sharebnb-dark text-white text-center rounded-xl transition cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;

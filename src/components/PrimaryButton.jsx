import React from "react";

function PrimaryButton({ label, onClick = () => {}, className = "" }) {
  const finalClass = `bg-primary text-white font-nunito  py-1 px-4 sm:py-2 sm:px-6 rounded-full text-xs sm:text-base ${className}`;

  return (
    <button type="button" className={finalClass} onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;

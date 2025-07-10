import React from "react";

function PrimaryButton({
  label,
  onClick,
  className = "bg-primary text-white py-2 px-6 rounded-full text-xs sm:text-base",
}) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;

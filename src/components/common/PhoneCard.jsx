import React from 'react'
import { BsTelephone } from "react-icons/bs";
function PhoneCard() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="110"
      className="flex flex-col gap-4 items-center w-4/5 mx-auto shadow-card shadow-gray-300 px-5 py-8"
    >
      <span className="border-dashed border-2 border-primary p-3 md:p-3 lg:p-5 w-fit rounded-full">
        <BsTelephone className="text-primary text-2xl" />
      </span>
      <h3 className="text-lg text-gray-600 font-nunito font-bold">Call Us</h3>
      <a
        href="tel:+155895548855"
        className="text-gray-600 hover:text-[#388da8]"
      >
        +1 5589 55488 55
      </a>
    </div>
  );
}

export default PhoneCard
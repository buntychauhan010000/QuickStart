import React from 'react'
import { BsGeoAlt } from "react-icons/bs";


function AddressCaard() {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="w-4/5 sm:w-full mx-auto md:w-1/2 shadow-card shadow-gray-300 px-5 py-8 my-4 lg:my-0 flex flex-col gap-4 items-center"
    >
      <span className="border-dashed border-2 border-primary p-3 md:p-3 lg:p-5 w-fit rounded-full">
        <BsGeoAlt className="text-primary text-2xl" />
      </span>
      <h3 className="text-lg text-gray-600 font-nunito font-semibold">
        Address
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 text-center">
        A108 Adam Street, New York, NY 535022
      </p>
    </div>
  );
}

export default AddressCaard
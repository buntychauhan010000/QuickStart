import React from "react";
import mobile from "../assets/img/mobile.jpg";
import PrimaryButton from "./PrimaryButton";

function Corporis() {
  return (
    <div className="bg-primary-lite md:bg-white py-4 sm:py-5 lg:py-16">
      <div className="container mx-auto px-4 ">
        {/* Two-column layout: Image + Content */}
        <div className="md:flex justify-between items-center gap-8">
          {/* Left: Mobile Image */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="sm:w-4/5 mx-auto md:w-1/2"
          >
            <img className="rounded-2xl" src={mobile} alt="Mobile Preview" />
          </div>

          {/* Right: Text and Button */}
          <article
            data-aos="fade-left"
            data-aos-delay="400"
            className="md:w-1/2 xl:w-2/5 md:p-7 xl:pr-20 md:bg-primary-lite text-center md:text-left mt-6"
          >
            <p className="text-secondary text-xl sm:text-2xl md:text-xl lg:text-2xl font-nunito font-bold mb-4">
              Corporis temporibus maiores provident
            </p>
            <p className="text-secondary text-sm sm:text-base md:text-sm lg:text-base mb-4">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
            <PrimaryButton
              label="Learn More"
              className="bg-primary text-white py-2 px-6 rounded-lg text-xs sm:text-base"
            />
          </article>
        </div>
      </div>
    </div>
  );
}

export default Corporis;

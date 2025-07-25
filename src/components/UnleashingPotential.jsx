import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Unleashing1 from "../assets/img/Unleashing1.jpg";
import Unleashing2 from "../assets/img/Unleashing2.jpg";
import Unleashing3 from "../assets/img/Unleashing3.jpg";
import "aos/dist/aos.css";
import UnleashingItems from "./common/UnleashingItems";

function UnleashingPotential() {
  return (
    <div id="about" className="container mx-auto px-4 py-10 lg:py-20">
      <article className="flex flex-col md:flex-row items-start sm:items-center gap-3 lg:gap-10">
        {/* LEFT SIDE TEXT */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-2/5 space-y-5 md:space-y-2  lg:space-y-5"
        >
          <p className="uppercase text-base md:text-sm text-gray-400">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold text-gray-600 font-nunito leading-tight">
            Unleashing Potential with Creative Strategy
          </h2>
          <p className="italic text-base md:text-sm lg:text-base text-gray-600 md:line-clamp-2 lg:line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Bullet Points */}
         <UnleashingItems/>

          {/* Read More Button */}
          <button className="flex items-center gap-2 font-nunito mx-auto sm:mx-0 bg-primary text-white text-sm sm:text-base px-3 lg:px-5 py-2 lg:py-3 rounded-lg hover:bg-[#2e6f8c] transition-colors duration-300">
            Read More <FaArrowRight />
          </button>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div data-aos="fade-left" className="w-full lg:w-3/5 sm:flex gap-4">
          <div className="w-4/5 sm:w-1/2 mx-auto">
            <img
              src={Unleashing1}
              alt="Team 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-4/5 mx-auto sm:w-1/2 flex flex-col gap-4 mt-5 sm:mt-0">
            <img
              src={Unleashing2}
              alt="Team 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <img
              src={Unleashing3}
              alt="Team 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default UnleashingPotential;

import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Unleashing1 from "../assets/img/Unleashing1.jpg";
import Unleashing2 from "../assets/img/Unleashing2.jpg";
import Unleashing3 from "../assets/img/Unleashing3.jpg";
import "aos/dist/aos.css";

function UnleashingPotential() {
  return (
    <div id="about" className="container mx-auto px-4 py-10 sm:py-20">
      <article className="flex flex-col lg:flex-row items-start sm:items-center gap-10">
        {/* LEFT SIDE TEXT */}
        <div data-aos="fade-right" className="w-full lg:w-2/5 space-y-5">
          <p className="uppercase text-base text-gray-400">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 font-nunito leading-snug">
            Unleashing Potential with Creative Strategy
          </h2>
          <p className="italic text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3">
            {[
              "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "Duis aute irure dolor in reprehenderit in voluptate velit.",
              "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <IoIosCheckmarkCircleOutline className="text-primary text-2xl" />
                <span className="text-gray-700 line-clamp-2">{text}</span>
              </li>
            ))}
          </ul>

          {/* Read More Button */}
          <button className="flex items-center gap-2 font-nunito bg-primary text-white text-base px-5 py-3 rounded-lg hover:bg-[#2e6f8c] transition-colors duration-300">
            Read More <FaArrowRight />
          </button>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div data-aos="fade-left"  className="w-full lg:w-3/5 sm:flex gap-4">
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

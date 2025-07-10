import React from "react";
import Nequegirl from "../assets/img/Nequegirl.jpg";
import PrimaryButton from "./PrimaryButton";
import { BsEasel } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { BsBrightnessHigh } from "react-icons/bs";

function Neque() {
  return (
    <div>
      <div className="container mx-auto px-4 py-16 ">
        <div className="md:flex justify-between items-center gap-8">
          <article className="md:w-1/2 xl:w-2/5 p-7 xl:pr-20 bg-primary-lite text-center md:text-left my-6">
            <p className="text-secondary text-start text-xl sm:text-2xl` font-nunito font-bold mb-4">
              Neque ipsum omnis sapiente quod quia dicta
            </p>
            <p className="text-secondary text-sm sm:text-base font-roboto mb-4">
              Quidem qui dolore incidunt aut. In assumenda harum id iusto lorena
              plasico mares
            </p>
            <ul>
              <li className="flex items-start gap-2 pb-5">
                <span>
                  <BsEasel className="text-primary text-2xl" />
                </span>
                <span className="text-gray-700 line-clamp-2">
                  Et corporis ea eveniet ducimus.
                </span>
              </li>
              <li className="flex items-start gap-2 pb-5">
                <span>
                  <BsPatchCheck className="text-primary text-2xl" />
                </span>
                <span className="text-gray-700 line-clamp-2">
                  Exercitationem dolorem sapiente.
                </span>
              </li>
              <li className="flex items-start gap-2 pb-5">
                <span>
                  <BsBrightnessHigh className="text-primary text-2xl" />
                </span>
                <span className="text-gray-700 line-clamp-2">
                  Veniam quia modi magnam.
                </span>
              </li>
            </ul>
            <PrimaryButton
              label={"Learn More"}
              className="bg-primary text-white py-2 px-6 rounded-lg text-xs sm:text-base"
            />
          </article>
          <div className=" md:w-1/2">
            <img className="rounded-2xl " src={Nequegirl} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Neque;

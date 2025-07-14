import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { pricingplans } from './common/helper';

function PricingItems() {
  return (
    <>
      {pricingplans.map((plan, index) => {
        const isLastItem = index === pricingplans.length - 1;
        const isOdd = pricingplans.length % 2 !== 0;

        // 👉 Conditionally apply col-span-2 on sm screen if only 1 card in last row
        const cardSpanClass =
          isLastItem && isOdd && pricingplans.length > 2
            ? "sm:col-span-2 md:col-span-1 sm:max-w-[320px]  sm:mx-auto "
            : "";

        return (
          <article
            key={index}
            data-aos="zoom-in"
            data-aos-delay="100"
            className={`bg-primary-lite p-5 md:max-w-[400px] 2xl:max-w-[480px] lg:p-10 flex flex-col gap-2 lg:gap-5 rounded-md ${cardSpanClass}`}
          >
            {/* ...same content as before... */}
            <p className="text-xl md:text-lg lg:text-xl font-nunito font-semibold text-secondary">
              {plan.title}
            </p>
            <p className="text-sm md:text-xs lg:text-sm text-secondary">
              {plan.description}
            </p>

            <p className="text-lg md:text-base lg:text-lg text-secondary-lite">
              <span className="text-5xl md:text-4xl text-primary font-nunito font-bold">
                <sup className="text-2xl md:text-xl lg:text-2xl">$</sup>
                {plan.price}
              </span>{" "}
              <span>/ month</span>
            </p>

            <button className="py-2 md:py-1 lg:py-2 w-full border font-nunito text-base text-secondary rounded-md hover:bg-primary duration-300 font-medium hover:text-white hover:border-primary">
              Start a free trial
            </button>
            <p className="text-center text-base md:text-sm lg:text-base text-secondary">
              No credit card required
            </p>

            <ul className="flex flex-col gap-5 md:gap-2 lg:gap-5">
              {plan.features.map((item, i) => (
                <li
                  key={i}
                  className={`flex text-xl md:text-lg lg:text-lg items-center gap-2 ${
                    item.available
                      ? "text-gray-600 text-base md:text-sm lg:text-base"
                      : "text-gray-400 line-through"
                  }`}
                >
                  {item.available ? (
                    <FaCheck className="text-green-500 text-sm md:text-xs lg:text-sm" />
                  ) : (
                    <FiX className="text-sm md:text-xs lg:text-sm" />
                  )}
                  <span className="text-sm sm:text-xs xl:text-sm">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </>
  );
}

export default PricingItems
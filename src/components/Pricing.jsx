import React from "react";
import { FaCheck } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { pricingplans } from "./common/helper";

function Pricing() {
  return (
    <div id="pricing" className="container mx-auto px-4 py-8">
      {/* Section Header */}
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-3xl font-bold font-nunito text-center text-secondary"
      >
        Pricing
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="w-12 h-1 bg-primary mx-auto my-3"
      />
      <p
        data-aos="fade-up"
        data-aos-delay="160"
        className="text-center text-secondary mb-10"
      >
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 lg:gap-6">
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
              className={`bg-primary-lite p-5 md:max-w-[400px] lg:p-10 flex flex-col gap-2 lg:gap-5 rounded-md ${cardSpanClass}`}
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
      </div>
    </div>
  );
}

export default Pricing;

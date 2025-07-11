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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingplans.map((plan, index) => (
          <article
            key={index}
            data-aos="zoom-in"
            data-aos-delay="100"
            className="bg-primary-lite p-10 flex flex-col gap-5 rounded-md"
          >
            {/* Title & Description */}
            <p className="text-xl font-nunito font-semibold text-secondary">
              {plan.title}
            </p>
            <p className="text-sm text-secondary">{plan.description}</p>

            {/* Price */}
            <p className="text-lg text-secondary-lite">
              <span className="text-5xl text-primary font-nunito font-bold">
                <sup className="text-2xl">$</sup>
                {plan.price}
              </span>{" "}
              <span>/ month</span>
            </p>

            {/* CTA Button */}
            <button className="py-2 w-full border font-nunito text-base text-secondary rounded-md hover:bg-primary duration-300 font-medium hover:text-white hover:border-primary">
              Start a free trial
            </button>
            <p className="text-center text-secondary">
              No credit card required
            </p>

            {/* Features List */}
            <ul className="flex flex-col gap-5">
              {plan.features.map((item, i) => (
                <li
                  key={i}
                  className={`flex text-xl items-center gap-2 ${
                    item.available
                      ? "text-gray-600"
                      : "text-gray-400 line-through"
                  }`}
                >
                  {item.available ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FiX />
                  )}
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

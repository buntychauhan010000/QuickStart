import React from "react";
import { FaCheck } from "react-icons/fa";
import { pricingplans } from "./common/helper";
import { FiX } from "react-icons/fi";

function Pricing() {
  return (
    <div
      id="pricing"
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-3xl font-bold font-nunito text-center text-secondary">
        Pricing
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto my-3"></div>
      <p className="text-center text-secondary mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingplans.map((plan, index) => (
          <article
            className="bg-primary-lite p-10 flex flex-col gap-5"
            key={index}
          >
            <p className="text-xl font-nunito font-semibold text-secondary">
              {plan.title}
            </p>
            <p className="text-sm text-secondary">{plan.description}</p>
            <p className="text-lg text-secondary-lite">
              <span className="text-5xl text-primary font-nunito font-bold">
                <sup className="text-2xl">$</sup>
                {plan.price}
              </span>{" "}
              <span> / month</span>
            </p>
            <button className="py-2 w-full border font-nunito text-base text-secondary rounded-md hover:bg-primary duration-300 font-medium hover:text-white hover:border-primary">
              Start a free trial
            </button>
            <p className="text-center text-secondary">
              No credit card required
            </p>

            {plan.features.map((item, index) => (
              <ul key={index}>
                <li
                  className={`flex items-center gap-2 ${
                    item.available
                      ? "text-secondary"
                      : "text-gray-400 line-through"
                  }`}
                >
                  <span>
                    {item.available ? (
                      <FaCheck className="text-green-500" />
                    ) : (
                      <FiX className="" />
                    )}
                  </span>
                  <span className="text-sm">{item.text}</span>
                </li>
              </ul>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

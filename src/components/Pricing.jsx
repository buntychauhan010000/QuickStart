import React from "react";
import PricingItems from "./PricingItems";


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
       <PricingItems/>
      </div>
    </div>
  );
}

export default Pricing;

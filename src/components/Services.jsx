import React from "react";
import ServicesItems from "./common/ServicesItems";


function Services() {
  return (
    <div className="bg-primary-lite">
      <div className="container mx-auto px-4 py-15">
        {/* Section Heading */}
        <h2
          id="services"
          className="text-3xl font-nunito font-bold  text-center text-secondary"
        >
          Services
        </h2>
        <div className="w-12 h-1 bg-primary mx-auto my-3" />
        <p className="text-center text-secondary mb-10">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mt-10">
          <ServicesItems/>
        </div>
      </div>
    </div>
  );
}

export default Services;

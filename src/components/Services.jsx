import React from "react";
import { servicesdata } from "./common/helper";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {servicesdata.map((item, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex items-start gap-5 p-3 sm:p-6 border border-gray-200 hover:shadow-card transition-shadow duration-300 rounded-lg bg-white"
            >
              {/* Icon */}
              <div
                className="rounded-2xl p-4 text-3xl border"
                style={{
                  color: item.color,
                  borderColor: item.color,
                  backgroundColor: `${item.color}20`, // light transparent background
                }}
              >
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold font-nunito text-secondary-lite mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-secondary-lite mb-3">
                  {item.lorem}
                </p>
                <a
                  href="#"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

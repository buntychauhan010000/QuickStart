import React from 'react'
import { servicesdata } from './helper';

function ServicesItems() {
  return (
    <>
      {servicesdata.map((item, index) => (
        <article
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="flex items-start gap-3 lg:gap-5 p-3 lg:p-6 border border-gray-200 hover:shadow-card transition-shadow duration-300 rounded-lg bg-white"
        >
          {/* Icon */}
          <div
            className="rounded-2xl p-3 lg:p-4 text-3xl border"
            style={{
              color: item.color,
              borderColor: item.color,
              backgroundColor: `${item.color}20`, // light transparent background
            }}
          >
            {item.icon}
          </div>

          {/* Text Content */}
          <div className="space-y-2 md:space-y-1 lg:space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-semibold font-nunito text-secondary-lite ">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base md:text-sm lg:text-base line-clamp-3 text-secondary-lite ">
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
    </>
  );
}

export default ServicesItems
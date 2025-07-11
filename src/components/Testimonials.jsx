import React from "react";
import Slider from "./common/Slider";

function Testimonials() {
  return (
    <div className="bg-primary-lite">
      <div className="container mx-auto px-4 pt-8">
        {/* Section Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl font-nunito font-bold text-center text-secondary"
        >
          Testimonials
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="1530"
          className="w-12 h-1 bg-primary mx-auto my-3"
        />
        <p
          data-aos="fade-up"
          data-aos-delay="1560"
          className="text-center text-secondary mb-10"
        >
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>

        {/* Swiper Slider Component */}
        <Slider />
      </div>
    </div>
  );
}

export default Testimonials;

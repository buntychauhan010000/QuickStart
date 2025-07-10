import React from "react";
import { SwiperSlide } from "swiper/react";
import Slider from "./common/Slider";

function Testimonials() {
  return (
    <div className="bg-primary-lite">
      <div className="container mx-auto px-4 pt-8">
        <h2 className="text-3xl font-nunito font-bold text-center text-secondary">
          Testimonials
        </h2>
        <div className="w-12 h-1 bg-primary mx-auto my-3"></div>
        <p className="text-center text-secondary mb-10">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <Slider />
      </div>
    </div>
  );
}

export default Testimonials;

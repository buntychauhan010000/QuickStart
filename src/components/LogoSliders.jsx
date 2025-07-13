import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import myob from "../assets/img/myob.png";
import belimo from "../assets/img/belimo.png";
import lifegroup from "../assets/img/lifegroup.png";
import grabyo from "../assets/img/grabyo.png";
import citrus from "../assets/img/citrus.png";
import trustly from "../assets/img/trustly.png";

const logos = [
  { name: "Myob", src: myob },
  { name: "Belimo", src: belimo },
  { name: "Lifegroup", src: lifegroup },
  { name: "Grabyo", src: grabyo },
  { name: "Citrus", src: citrus },
  { name: "Trustly", src: trustly },
];

function LogoSliders() {
  return (
    <div className="container mx-auto px-3 py-10 lg:py-20">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 100, disableOnInteraction: false }}
        speed={1100}
        slidesPerView={3}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
          1280: { slidesPerView: 6, spaceBetween: 60 },
        }}
        className="w-full"
      >
        {logos.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="flex justify-center items-center grayscale brightness-110 contrast-75 opacity-60 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:opacity-100 transition-all duration-200"
            >
              <img
                src={item.src}
                alt={`${item.name} logo`}
                className="h-9 lg:h-12 w-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LogoSliders;

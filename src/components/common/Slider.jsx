import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GoStarFill } from "react-icons/go";
import { sliderdata } from "./helper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

function Slider() {
  return (
    <div className="container mx-auto px-4 sm:py-4 sm:py-8 md:py-16 relative overflow-hidden">
      {/* 🔽 Bottom blur shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-16  bg-gradient-to-t from-gray-100 to-transparent blur-md z-0 pointer-events-none"></div>

      {/* 🔽 Swiper Slider */}
      <div className="relative z-1 slider-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          spaceBetween={30}
          className="mySwiper custom-swiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 1.2,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
        >
          {sliderdata.map((item, index) => (
            <SwiperSlide
              key={index}
              data-aos="fade-up"
              data-aos-delay="100"
              className="h-full"
            >
              <article className="bg-white shadow-card px-6 py-8 sm:px-8 mb-10 md:px-10 rounded-lg min-h-[420px] sm:min-h-[450px] flex flex-col items-center text-center transition duration-300 ease-in-out">
                {/* ⭐ Rating */}
                <div className="flex items-center justify-center gap-1 text-amber-400 text-xl mb-4">
                  {[...Array(5)].map((_, i) => (
                    <GoStarFill key={i} />
                  ))}
                </div>

                {/* 💬 Quote */}
                <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed flex-1 mb-6">
                  {item.description}
                </p>

                {/* 👤 User Info */}
                <div>
                  <img
                    src={item.src}
                    alt={item.name}
                    className="mx-auto rounded-full w-20 h-20 object-cover mb-3 border border-primary"
                  />
                  <h3 className="text-lg font-bold text-secondary">
                    {item.name}
                  </h3>
                  <p className="text-sm text-secondary-lite">{item.position}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderdata } from "./helper";
import { GoStarFill } from "react-icons/go";
import "./Slider.css";

function Slider() {
  return (
    <div className="container mx-auto sm:py-16 relative overflow-hidden">
      {/* 🔽 Bottom blur shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent blur-md z-0 pointer-events-none"></div>

      {/* 🔽 Slider wrapper */}
      <div className="relative z-1 slider-wrapper">
        <Swiper
          navigation={false}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          className="mySwiper custom-swiper"
          style={{ width: "100%", height: "100%" }}
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
            <SwiperSlide key={index} className="h-full">
              <article className="h-full sm:min-h-[450px] mb-10 bg-white shadow-card px-4 sm:px-6 md:px-10 xl:px-16 sm:gap-5 py-8 flex flex-col items-center justify-between text-center transition-all duration-300 ease-in-out">
                <div className="flex items-center justify-center gap-1 text-amber-400 text-xl">
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                </div>
                <p className="mt-4 text-base text-gray-700 italic flex-1">
                  {item.description}
                </p>
                <div>
                  <img
                    src={item.src}
                    alt={item.name}
                    className="mx-auto rounded-full w-24 h-24 mb-4"
                  />
                  <h3 className="text-lg font-bold text-secondary">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.position}</p>
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

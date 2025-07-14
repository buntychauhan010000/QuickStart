import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import belimo from "../assets/img/belimo.png";
import citrus from "../assets/img/citrus.png";
import grabyo from "../assets/img/grabyo.png";
import lifegroup from "../assets/img/lifegroup.png";
import myob from "../assets/img/myob.png";
import trustly from "../assets/img/trustly.png";
import LogoItem from "./LogoItem";

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
        autoplay={{
          delay: 0, // <- continuous
          disableOnInteraction: false,
        }}
        speed={4000} // <- longer speed means smoother, continuous feel
        loop={true}
        allowTouchMove={false} // optional: disable manual dragging
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 20 },
          640: { slidesPerView: 4, spaceBetween: 30 },
          768: { slidesPerView: 5, spaceBetween: 40 },
          1024: { slidesPerView: 6, spaceBetween: 50 },
          1280: { slidesPerView: 6, spaceBetween: 60 },
        }}
        className="w-full"
      >
        {logos.map((item, index) => (
          <SwiperSlide key={index}>
            <LogoItem item={item} id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LogoSliders;

import React from "react";
import Featuresgirls from "../assets/img/Featuresgirls.jpg";
import FeaturesItems from "./common/FeaturesItems";

function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <p
        data-aos="fade-up"
        data-aos-delay="40"
        id="features"
        className="text-3xl text-secondary font-nunito font-bold text-center"
      >
        Features
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="60"
        className="h-1 w-12 mx-auto my-3 bg-primary"
      />
      <p
        data-aos="fade-up"
        data-aos-delay="70"
        className="text-base text-secondary text-center lg:mb-15"
      >
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Features List + Image Section */}
      <div className="flex justify-between items-center flex-col-reverse md:flex-row mt-10">
        {/* Features List */}
        <div className="md:w-3/5 xl:w-2/5 md:p-4">
        <FeaturesItems/>
        </div>

        {/* Right Side Image */}
        <div data-aos="fade-up" data-aos-delay="60" className="sm:w-4/5 md:w-2/5">
          <img
            className="rounded-2xl"
            src={Featuresgirls}
            alt="Features Girl"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;

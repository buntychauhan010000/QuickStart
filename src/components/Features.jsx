import React from "react";
import Featuresgirls from "../assets/img/Featuresgirls.jpg";
import { featuresdata } from "./common/helper";

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
          {featuresdata.map((feature, i) => (
            <article key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex lg:gap-5 py-2 lg:py-4 hover:bg-primary-lite transition-all duration-300 p-3 lg:p-5 lg:my-5 mt-2">
                <div className="text-primary text-4xl mr-3 bg-white lg:shadow-md w-fit h-fit lg:p-3 rounded-full">
                  {feature.src}
                </div>
                <div>
                  <p className="text-lg text-secondary font-nunito font-semibold ">
                    {feature.title}
                  </p>
                  <p className="text-sm md:line-clamp-2 lg:line-clamp-none text-secondary">{feature.lorem}</p>
                </div>
              </div>
            </article>
          ))}
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

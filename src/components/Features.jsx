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
        className="text-3xl text-secondary font-bold text-center"
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
        className="text-base text-secondary text-center sm:mb-15"
      >
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Features List + Image Section */}
      <div className="flex justify-between items-center flex-col lg:flex-row mt-10">
        {/* Features List */}
        <div className="lg:w-1/2 xl:w-2/5 p-4">
          {featuresdata.map((feature, i) => (
            <article key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="flex sm:gap-5 py-2 sm:py-4 hover:bg-primary-lite transition-all duration-300 sm:p-5 my-5">
                <div className="text-primary text-4xl mr-3 bg-white shadow-md w-fit h-fit p-3 rounded-full">
                  {feature.src}
                </div>
                <div>
                  <p className="text-lg text-secondary font-bold">
                    {feature.title}
                  </p>
                  <p className="text-sm text-secondary">{feature.lorem}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Right Side Image */}
        <div data-aos="fade-up" data-aos-delay="60" className="w-4/5 lg:w-1/2">
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

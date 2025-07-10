import React from "react";

import Featuresgirls from "../assets/img/Featuresgirls.jpg";
import { featuresdata } from "./common/helper";

function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      <p
        id="features"
        className="text-3xl text-secondary font-nunito font-bold text-center"
      >
        Features
      </p>
      <div className="h-1 w-12 mx-auto my-3 bg-primary"></div>
      <p className="text-base text-secondary font-nunito font-normal text-center mb-15">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="flex justify-between items-center flex-col lg:flex-row mt-10">
        <div className="lg:w-1/2 xl:w-2/5 p-4">
          {featuresdata.map((index, i) => (
            <article key={i}>
              <div className="flex sm:gap-5 py-7 hover:bg-primary-lite transition-all duration-300 sm:p-5 my-5">
                <div className="text-primary text-4xl mr-3 bg-white shadow-md w-fit h-fit p-3 rounded-full">
                  {index.src}
                </div>
                <div>
                  <p className="text-lg text-secondary font-nunito font-bold">
                    {index.title}
                  </p>
                  <p className="text-sm text-secondary font-nunito font-normal">
                    {index.lorem}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="w-4/5 lg:w-1/2 p-4">
          <img className="rounded-2xl" src={Featuresgirls} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Features;

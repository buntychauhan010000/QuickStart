import React from 'react'
import { featuresdata } from './helper'

function FeaturesItems() {
  return (
      <>
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
      </>
  )
}

export default FeaturesItems
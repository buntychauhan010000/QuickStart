import React from "react";
import { carditem } from "./common/helper";

function InfoCards() {
  return (
    <div className="bg-primary-lite">
      <div className="container mx-auto px-4 py-8 mt-15 sm:mt-0">
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {carditem.map((item, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-transparent flex gap-5 group p-4 rounded "
            >
              {/* Icon */}
              <div className="text-4xl p-5 bg-primary-lite text-primary transition-all duration-300 group-hover:text-white group-hover:bg-primary rounded-lg">
                {item.image}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg text-secondary font-semibold mb-1 font-nunito transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfoCards;

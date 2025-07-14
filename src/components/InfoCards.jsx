import React from "react";
import { carditem } from "./common/helper";

function InfoCards() {
  return (
    <div className="bg-primary-lite">
      <div className="container mx-auto px-4 py-8 mt-15 sm:mt-0">
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {carditem.map((item, index) => {
            const isLastItem = index === carditem.length - 1;
            const isOdd = carditem.length % 2 !== 0;

            // 👇 Center last card on small screen if odd
            const cardSpanClass =
              isLastItem && isOdd && carditem.length > 2
                ? "sm:col-span-2 sm:max-w-[320px] sm:mx-auto md:col-span-1"
                : "";

            return (
              <article
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`bg-transparent flex gap-3 lg:gap-5 group p-2 lg:p-4 rounded items-start ${cardSpanClass}`}
              >
                {/* Icon */}
                <div className="text-2xl lg:text-4xl p-3 lg:p-5 bg-primary-lite text-primary transition-all duration-300 group-hover:text-white group-hover:bg-primary rounded-lg">
                  {item.image}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg text-secondary font-semibold mb-1 font-nunito transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-xs lg:text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfoCards;

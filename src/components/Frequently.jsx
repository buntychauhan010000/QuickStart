import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { faqs } from "./common/helper";

function Frequently() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto px-3 py-10 sm:py-20">
      {/* Section Title */}
      <h2
        data-aos="fade-up"
        
        className="text-3xl font-bold text-center text-secondary"
      >
        Frequently Asked Questions
      </h2>
      <div
        data-aos="fade-up"
        data-aos-delay="10"
        className="w-12 h-1 bg-primary mx-auto my-3"
      />
      <p
        data-aos="fade-up"
        data-aos-delay="20"
        className="text-center text-secondary mb-10"
      >
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Accordion FAQ */}
      <div className="sm:w-3/4 mx-auto mt-10">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`border border-gray-300 rounded-md mb-3 overflow-hidden transition-all duration-300 ${
                isActive ? "bg-blue-50" : "bg-white"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className={`w-full flex justify-between items-center text-left px-4 py-3 focus:outline-none transition-all duration-300 ${
                  isActive ? "text-primary font-semibold" : "text-secondary"
                }`}
              >
                <span>{faq.question}</span>
                <GoChevronRight
                  className={`w-5 h-5 ms-2 transform transition-transform duration-300 ${
                    isActive ? "rotate-90 text-primary" : "rotate-0"
                  }`}
                />
              </button>

              {isActive && (
                <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Frequently;

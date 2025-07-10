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
      <h2 className="text-3xl font-nunito font-bold text-center text-secondary">
        Frequently Asked Questions
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto my-3"></div>
      <p className="text-center text-secondary mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="sm:w-3/4 mx-auto mt-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-300 rounded-md mb-3 font-nunito overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "bg-blue-50" : "bg-white"
            }`}
          >
            <button
              className={`w-full flex justify-between items-center text-left px-4 py-3 focus:outline-none transition-all duration-300 ${
                activeIndex === index
                  ? "text-primary font-semibold"
                  : "text-secondary"
              }`}
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              <GoChevronRight
                className={`w-5 h-5 ms-2 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90 text-primary" : "rotate-0"
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frequently;

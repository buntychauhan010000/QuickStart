import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { faqs } from "./helper";

function FaqsIndex() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
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
              className={`w-full flex justify-between items-center font-semibold font-nunito text-left px-4 py-3 focus:outline-none transition-all duration-500 ${
                isActive ? "text-primary font-semibold" : "text-secondary"
              }`}
            >
              <span>{faq.question}</span>
              <GoChevronRight
                className={`w-5 h-5 ms-2 transform transition-all duration-300 ${
                  isActive ? "rotate-90 text-primary" : "rotate-0"
                }`}
              />
            </button>

            {isActive && (
              <div className="px-4 pb-4 text-gray-700 transition-all duration-300">{faq.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default FaqsIndex;

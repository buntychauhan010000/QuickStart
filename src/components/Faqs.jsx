import React, { useState } from "react";
import FaqsIndex from "./common/FaqsIndex";

function Faqs() {
  return (
    <div className="container mx-auto px-3 py-10 sm:py-20">
      {/* Section Title */}
      <h2
        data-aos="fade-up"
        className="text-3xl font-nunito font-bold text-center text-secondary"
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
      <FaqsIndex />
    </div>
  );
}

export default Faqs;

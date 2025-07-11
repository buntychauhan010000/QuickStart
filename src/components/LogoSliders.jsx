import React from "react";
import myob from "../assets/img/myob.png";
import belimo from "../assets/img/belimo.png";
import lifegroup from "../assets/img/lifegroup.png";
import grabyo from "../assets/img/grabyo.png";
import citrus from "../assets/img/citrus.png";
import trustly from "../assets/img/trustly.png";

// Logo data moved outside component (performance-friendly)
const logos = [
  { name: "Myob", src: myob },
  { name: "Belimo", src: belimo },
  { name: "Lifegroup", src: lifegroup },
  { name: "Grabyo", src: grabyo },
  { name: "Citrus", src: citrus },
  { name: "Trustly", src: trustly },
];

function LogoSliders() {
  return (
    <div className="container mx-auto px-3 py-10 sm:py-20">
      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
        {logos.map((item, index) => (
          <article
            key={index}
            className="flex justify-center items-center mt-6 md:mt-0 grayscale brightness-110 contrast-75 opacity-60 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:opacity-100 transition"
          >
            <img
              src={item.src}
              alt={`${item.name} logo`}
              className="h-12 w-auto"
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default LogoSliders;

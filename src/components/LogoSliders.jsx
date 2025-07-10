import React from "react";
import myob from "../assets/img/myob.png";
import belimo from "../assets/img/belimo.png";
import lifegroup from "../assets/img/lifegroup.png";
import grabyo from "../assets/img/grabyo.png";
import citrus from "../assets/img/citrus.png";
import trustly from "../assets/img/trustly.png";

function LogoSliders() {
  const logo = [
    {
      name: "logo1",
      src: myob,
    },
    {
      name: "logo2",
      src: belimo,
    },
    {
      name: "logo3",
      src: lifegroup,
    },
    {
      name: "logo4",
      src: grabyo,
    },
    {
      name: "logo5",
      src: citrus,
    },
    {
      name: "logo6",
      src: trustly,
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-3 py-10 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {logo.map((item, index) => (
            <article
              key={index}
              className="flex justify-center mt-6 md:mt-0 items-center grayscale brightness-110 contrast-75 opacity-60 hover:grayscale-0 hover:brightness-100 hover:contrast-100 hover:opacity-100 transition"
            >
              <img src={item.src} alt={item.name} className="h-12 w-auto" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSliders;

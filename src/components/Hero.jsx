import React from "react";
import bgimg from "../assets/img/bgimg.webp";
import Welcome from "./Welcome";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${bgimg})` }}
      className="relative sm:min-h-screen overflow-hidden bg-cover bg-no-repeat bg-bottom"
    >
      <div className="w-full h-full inset-0 absolute bg-white/85 "></div>
      <div className="relative z-10">
        <NavBar />
        <Welcome />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import Welcome from "./Welcome";
import "aos/dist/aos.css";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div className="relative hero-bg lg:min-h-screen overflow-hidden bg-cover bg-no-repeat bg-bottom">
      {/* White overlay over background */}
      <div className="absolute inset-0 w-full h-full bg-white/85" />

      {/* Content: Navbar and Welcome message */}
      <div className="relative z-10">
        <NavBar />
        <Welcome />
      </div>
    </div>
  );
}

export default Hero;

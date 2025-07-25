import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import PrimaryButton from "./PrimaryButton";
import { navlinks } from "./common/helper";
import NavItems from "./common/NavItems";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // clean up on unmount
    };
  }, [isOpen]);
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setHasShadow(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click (for mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  

  return (
    <>
      {/* Fixed Navbar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
          hasShadow ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-3 py-2 md:py-3 lg:py-5 relative">
          <div className="flex justify-between lg:justify-around items-center">
            {/* Logo */}
            <a className="flex items-center gap-3" href="#">
              <img className="max-h-6 sm:max-h-9" src={logo} alt="logo" />
              <h1 className="text-2xl sm:text-3xl font-nunito font-bold text-secondary">
                QuickStart
              </h1>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden xl:flex gap-7 items-center">
              <NavItems links={navlinks} onClick={handleLinkClick} />
              <li>
                <PrimaryButton
                  label="Get Started"
                />
              </li>
            </ul>

            {/* Mobile Nav Toggle */}
            <div className="flex items-center gap-4 xl:hidden">
              {!isOpen && (
                <PrimaryButton
                  label="Get Started"
                  className="hidden sm:flex"
                />
              )}
              <button onClick={toggleMenu}>
                {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-300 bg-opacity-20 flex justify-center items-start pt-28 ">
          <div className="bg-white w-full max-w-4/5 rounded-lg shadow-lg p-8 flex flex-col">
            <ul className="flex flex-col gap-6 text-lg items-start">
              <NavItems links={navlinks} onClick={handleLinkClick} />
              <li>
                <PrimaryButton label="Get Started" onClick={handleLinkClick} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

import React, { useState, useEffect } from "react";
import logo from "../assets/img/logo.png";
import { HiMenu, HiX } from "react-icons/hi";
import PrimaryButton from "./PrimaryButton";
import { navlinks } from "./common/helper";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Fixed NavBar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300 ${
          hasShadow ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-3 py-6 relative">
          <div className="flex justify-between lg:justify-around items-center">
            {/* Logo */}
            <a className="flex items-center gap-3" href="#">
              <img className="max-h-6 sm:max-h-9" src={logo} alt="logo" />
              <h1 className="text-3xl font-bold text-secondary font-nunito">
                QuickStart
              </h1>
            </a>

            {/* Desktop Nav (xl+) */}
            <ul className="hidden xl:flex gap-7 items-center">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <PrimaryButton
                  label={"Get Started"}
                  className="bg-primary text-white py-2 px-6 rounded-full text-xs sm:text-base"
                />
              </li>
            </ul>

            {/* Mobile - Get Started + Menu Button */}
            <div className="flex items-center gap-4 xl:hidden">
              {!isOpen && (
                <PrimaryButton
                  label={"Get Started"}
                  className="hidden sm:flex bg-primary text-white py-2 px-6 rounded-full text-xs sm:text-base"
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
        <div className="fixed inset-0 z-40 bg-gray-300 bg-opacity-20 flex justify-center items-center mt-8">
          <div className="bg-white w-[95vw] h-[88vh] rounded-lg shadow-lg p-8 overflow-y-auto flex flex-col ">
            <ul className="flex flex-col gap-6 text-lg items-start">
              <li>
                <a href="#" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Dropdown
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <PrimaryButton label={"Get Started"} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

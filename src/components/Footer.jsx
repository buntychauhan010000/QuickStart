import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  {
    title: "Useful Links",
    links: [
      "Home",
      "About us",
      "Services",
      "Terms of service",
      "Privacy policy",
    ],
  },
  {
    title: "Our Services",
    links: [
      "Web Design",
      "Web Development",
      "Product Management",
      "Marketing",
      "Graphic Design",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary-lite text-gray-700 py-10 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Footer Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold font-nunito mb-5">QuickStart</h2>
            <p className="text-sm font-nunito">A108 Adam Street</p>
            <p className="text-sm font-nunito mt-1">New York, NY 535022</p>
            <p className="text-sm font-nunito mt-2">
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p className="text-sm font-nunito mt-1">
              <strong>Email:</strong> info@example.com
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              {[BsTwitterX, FaFacebook, FaInstagram, FaLinkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 border rounded-full text-gray-500 hover:text-primary hover:border-primary transition-colors"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold font-nunito mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-sm hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold font-nunito mb-4">
              Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 ps-3 py-2 bg-white rounded-l-full border border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider & Copyright */}
        <hr className="my-6 border-gray-300" />
        <p className="text-center text-sm font-nunito">
          © <strong>QuickStartAll</strong> | All Rights Reserved <br />
          Designed by <span className="text-primary">BootstrapMade</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

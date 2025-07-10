import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// Footer section link groups
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
        {/* Grid layout: Company Info, Links, Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* === 1. Company Information Section === */}
          <div>
            <h2 className="text-3xl font-bold mb-5 font-nunito">QuickStart</h2>
            <p className="font-nunito text-sm mt-12">A108 Adam Street</p>
            <p className="font-nunito text-sm mt-2">New York, NY 535022</p>
            <p className="mt-2 text-sm font-nunito">
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p className="text-sm font-nunito mt-2">
              <strong>Email:</strong> info@example.com
            </p>

            {/* === Social Media Icons === */}
            <div className="flex space-x-3 mt-4">
              {[BsTwitterX, FaFacebook, FaInstagram, FaLinkedin].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 border rounded-full text-gray-500 hover:text-primary hover:border-blue-500"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>

          {/* === 2 & 3. Dynamic Link Sections (Useful Links + Our Services) === */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 font-nunito">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-primary text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* === 4. Newsletter Subscription Section === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-nunito">
              Our Newsletter
            </h3>
            <p className="mb-4 text-sm">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>

            {/* === Email Input & Subscribe Button === */}
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 ps-2 sm:px-3 bg-white rounded-l-full border border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-full "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* === Footer Divider & Copyright === */}
      <hr className="my-6 text-gray-300" />
      <p className="text-center text-sm">
        © Copyright <strong>QuickStartAll</strong> Rights Reserved <br />
        Designed by <span className="text-primary">BootstrapMade</span>
      </p>
    </footer>
  );
};

export default Footer;

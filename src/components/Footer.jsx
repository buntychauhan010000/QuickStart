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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3  lg:gap-0">
          {/* QuickStart Logo & Contact Info - Always on Top on Small Devices */}
          <div className="md:col-span-3 lg:col-span-1 w-full order-1 lg:order-none">
            <h2 className="text-3xl font-bold font-nunito mb-5">QuickStart</h2>
            <p className="text-sm font-nunito">A108 Adam Street</p>
            <p className="text-sm font-nunito mt-1">New York, NY 535022</p>
            <p className="text-sm font-nunito mt-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+155895548855" className="hover:text-primary">
                +1 5589 55488 55
              </a>
            </p>
            <p className="text-sm font-nunito mt-1">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@example.com" className="hover:text-primary">
                info@example.com
              </a>
            </p>

            <div className="flex space-x-3 mt-4">
              {[
                { Icon: BsTwitterX, label: "Twitter" },
                { Icon: FaFacebook, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedin, label: "LinkedIn" },
              ].map(({ Icon, label }, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={label}
                  className="p-2 border rounded-full text-gray-500 hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Other Footer Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="order-2">
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
          <div className="order-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold font-nunito mb-4">
              Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                className="sm:rounded-l-full sm:rounded-r-none rounded-full ps-3 py-2 bg-white border border-primary focus:outline-none sm:flex-1 mb-3 sm:mb-0"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-full sm:rounded-l-none  sm:rounded-r-full hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider & Copyright */}
        <hr className="my-6 border-gray-300" />
        <p className="text-center text-sm font-nunito ">
          © <strong>QuickStartAll</strong> | All Rights Reserved <br />
          Designed by <span className="text-primary">BootstrapMade</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

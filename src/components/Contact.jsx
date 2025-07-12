import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import ContactForm from "./common/ContactForm";
// import ContactForm from "../components/Corporis/ContactForm";

function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-4  md:py-16 mb-15">
      {/* Section Heading */}
      <h2 className="text-3xl font-nunito  font-bold text-center text-secondary">
        Contact
      </h2>
      <div className="w-12 h-1 bg-primary mx-auto my-3" />
      <p className="text-center text-secondary mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Contact Info Cards */}
      <div className="md:flex justify-between  items-center md:gap-3 lg:gap-5">
        {/* Address Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-4/5 mx-auto md:w-1/2 shadow-card shadow-gray-300 px-5 py-8 my-4 lg:my-0 flex flex-col gap-4 items-center"
        >
          <span className="border-dashed border-2 border-primary p-3 md:p-3 lg:p-5 w-fit rounded-full">
            <BsGeoAlt className="text-primary text-2xl" />
          </span>
          <h3 className="text-lg text-gray-600 font-nunito font-semibold">
            Address
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            A108 Adam Street, New York, NY 535022
          </p>
        </div>

        {/* Phone & Email Cards */}
        <div className="md:w-1/2 flex flex-col sm:flex-row gap-5 md:gap-3 lg:gap-5">
          {/* Phone Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="110"
            className="flex flex-col gap-4 items-center w-4/5 mx-auto shadow-card shadow-gray-300 px-5 py-8"
          >
            <span className="border-dashed border-2 border-primary p-3 md:p-3 lg:p-5 w-fit rounded-full">
              <BsTelephone className="text-primary text-2xl" />
            </span>
            <h3 className="text-lg text-gray-600 font-nunito font-bold">
              Call Us
            </h3>
            <a
              href="tel:+155895548855"
              className="text-gray-600 hover:text-[#388da8]"
            >
              +1 5589 55488 55
            </a>
          </div>

          {/* Email Card */}
          <div
            data-aos="fade-up"
            data-aos-delay="110"
            className="flex flex-col gap-4 items-center w-4/5 mx-auto shadow-card shadow-gray-300 px-5 py-8"
          >
            <span className="border-dashed border-2 border-primary p-3 md:p-3 lg:p-5 w-fit rounded-full">
              <BsEnvelope className="text-primary text-2xl" />
            </span>
            <h3 className="text-lg text-gray-600 font-nunito font-semibold">
              Email Us
            </h3>
            <a
              href="mailto:info@example.com"
              className="text-gray-600 hover:text-[#388da8]"
            >
              info@example.com
            </a>
          </div>
        </div>
      </div>

      {/* Map & Contact Form */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex gap-5 justify-between items-center flex-col md:flex-row mt-10"
      >
        {/* Google Map */}
        <div className="w-4/5 mx-auto md:w-1/2 shadow-card shadow-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48399.333548272545!2d-74.034119!3d40.696915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1752145529770!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="w-4/5 mx-auto md:w-1/2 shadow-card">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;

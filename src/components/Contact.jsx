import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";
import ContactForm from "./common/ContactForm";

function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-16 mb-15">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-secondary">Contact</h2>
      <div className="w-12 h-1 bg-primary mx-auto my-3" />
      <p className="text-center text-secondary mb-10">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>

      {/* Contact Info Cards */}
      <div className="lg:flex justify-between items-center gap-5">
        {/* Address Card */}
        <div className="lg:w-1/2 shadow-card shadow-gray-300 px-5 py-8 my-4 lg:my-0 flex flex-col gap-4 items-center">
          <span className="border-dashed border-2 border-primary p-5 w-fit rounded-full">
            <BsGeoAlt className="text-primary text-2xl" />
          </span>
          <h3 className="text-lg text-gray-600 font-bold">Address</h3>
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            A108 Adam Street, New York, NY 535022
          </p>
        </div>

        {/* Phone & Email Cards */}
        <div className="lg:w-1/2 flex flex-col sm:flex-row gap-5">
          {/* Phone Card */}
          <div className="flex flex-col gap-4 items-center w-full shadow-card shadow-gray-300 px-5 py-8">
            <span className="border-dashed border-2 border-primary p-5 w-fit rounded-full">
              <BsTelephone className="text-primary text-2xl" />
            </span>
            <h3 className="text-lg text-gray-600 font-bold">Call Us</h3>
            <p className="text-xs sm:text-sm text-gray-500">+1 5589 55488 55</p>
          </div>

          {/* Email Card */}
          <div className="flex flex-col gap-4 items-center w-full shadow-card shadow-gray-300 px-5 py-8">
            <span className="border-dashed border-2 border-primary p-5 w-fit rounded-full">
              <BsEnvelope className="text-primary text-2xl" />
            </span>
            <h3 className="text-lg text-gray-600 font-bold">Email Us</h3>
            <p className="text-xs sm:text-sm text-gray-500">info@example.com</p>
          </div>
        </div>
      </div>

      {/* Map & Contact Form */}
      <div className="flex gap-5 justify-between items-center flex-col lg:flex-row mt-10">
        {/* Google Map */}
        <div className="w-full lg:w-1/2 shadow-card shadow-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48399.333548272545!2d-74.034119!3d40.696915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1752145529770!5m2!1sen!2sus"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2 shadow-card">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;

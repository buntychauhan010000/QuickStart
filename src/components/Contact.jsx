import React from "react";
import { BsGeoAlt, BsTelephone } from "react-icons/bs";
import ContactForm from "./common/ContactForm";
import { googleMap } from "./common/helper";
import EmailCard from "./common/EmailCard";
import PhoneCard from "./common/PhoneCard";
import AddressCaard from "./common/AddressCaard";
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
        <AddressCaard />

        {/* Phone & Email Cards */}
        <div className="md:w-1/2 flex flex-col sm:flex-row gap-5 md:gap-3 lg:gap-5">
          {/* Phone Card */}
          <PhoneCard />

          {/* Email Card */}
          <EmailCard />
        </div>
      </div>

      {/* Map & Contact Form */}
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex gap-5 justify-between items-center flex-col md:flex-row mt-10"
      >
        {/* Google Map */}
        <div className="w-4/5  mx-auto md:w-1/2 shadow-card shadow-gray-300">
          {googleMap}
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

import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirmed = window.confirm("Thank for Submitting");
    if (confirmed) {
      // Submit logic here
      console.log("Submitted Data:", formData);

      // Optionally reset the form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className=" mx-auto h-[450px] p-6  bg-white shadow-md rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-200 rounded focus:outline-none focus:ring"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 p-2 border border-gray-200 rounded focus:outline-none focus:ring"
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
          required
        ></textarea>

        <div className="text-center mt-5">
          <PrimaryButton label={"Send Message"} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

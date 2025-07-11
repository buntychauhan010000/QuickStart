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

    const confirmed = window.confirm("Thanks for submitting!");
    if (confirmed) {
      console.log("Submitted Data:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded w-full h-[450px] max-w-3xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name and Email */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-200 rounded focus:outline-none focus:ring"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-200 rounded focus:outline-none focus:ring"
            required
          />
        </div>

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring"
          required
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring"
          required
        ></textarea>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <PrimaryButton
            label="Send Message"
            className="bg-primary hover:bg-[#2c728a] text-white py-2 px-6 rounded-lg text-base transition"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

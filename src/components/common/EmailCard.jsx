import React from 'react'
import {BsEnvelope } from "react-icons/bs";

function EmailCard() {
  return (
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
  )
}

export default EmailCard
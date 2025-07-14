import React from 'react'
import { enimquisdata } from './helper';

function EnimquisItems() {
  return (
    <>
      {enimquisdata.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 50}
          className="flex items-start py-2 lg:py-4 bg-white rounded-lg"
        >
          <div className="text-primary text-2xl md:text-xl lg:text-2xl mt-2 mr-4 md:mr-2 lg:mr-4">
            {item.icon}
          </div>
          <div>
            <h3 className="text-lg md:text-base lg:text-lg text-secondary font-nunito font-semibold mb-1">
              {item.title}
            </h3>
            <p className="text-sm md:text-xs lg:text-sm line-clamp-2 text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default EnimquisItems
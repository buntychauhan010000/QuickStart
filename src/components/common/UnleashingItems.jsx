import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function UnleashingItems() {
  return (
     <ul className="md:space-y-1 lg:space-y-3 text-base md:text-sm lg:text-base">
                {[
                  "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Duis aute irure dolor in reprehenderit in voluptate velit.",
                  "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span>
                      <IoIosCheckmarkCircleOutline className="text-primary text-2xl" />
                    </span>
                    <span className="text-gray-700 line-clamp-2">{text}</span>
                  </li>
                ))}
              </ul>
  )
}

export default UnleashingItems
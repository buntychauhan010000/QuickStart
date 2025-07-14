import React from "react";
import InfoCardItems from "./common/InfoCardItems";

function InfoCards() {
  return (
    <div className="bg-primary-lite">
      <div className="container mx-auto px-4 py-8 mt-15 sm:mt-0">
        {/* Card Grid */}
        <InfoCardItems />
      </div>
    </div>
  );
}

export default InfoCards;

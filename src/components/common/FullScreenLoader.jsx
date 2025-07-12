import React from "react";

const FullScreenLoader = () => {

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white overflow-hidden">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
    </div>
  );
};

export default FullScreenLoader;

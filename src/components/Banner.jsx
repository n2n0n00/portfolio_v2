import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full mt-[150px]">
      <div className="absolute inset-0 back_green_banner overflow-hidden">
        <p className="banner m-5 max-sm:m-1">DEVELOPMENT</p>
        <p className="banner m-5 max-sm:m-1">BACKEND</p>
        <p className="banner m-5 max-sm:m-1">FRONTEND</p>
        <p className="banner m-5 max-sm:m-1">BACKEND</p>
        <p className="banner m-5 max-sm:m-1">NEXTJS</p>
      </div>
      <div className="absolute inset-0 front_green_banner overflow-hidden">
        <p className="banner m-5 max-sm:m-1">BACKEND</p>
        <p className="banner m-5 max-sm:m-1">NEXTJS</p>
        <p className="banner m-5 max-sm:m-1">REACTJS</p>
        <p className="banner m-5 max-sm:m-1">BACKEND</p>
        <p className="banner m-5 max-sm:m-1">NEXTJS</p>
      </div>
    </div>
  );
};

export default Banner;

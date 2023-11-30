import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full my-[200px]">
      <div className="absolute inset-0 back_green_banner">
        <p className="banner m-5">DEVELOPMENT</p>
        <p className="banner m-5">BACKEND</p>
        <p className="banner m-5">FRONTEND</p>
        <p className="banner m-5">BACKEND</p>
        <p className="banner m-5">NEXTJS</p>
      </div>
      <div className="absolute inset-0 front_green_banner">
        <p className="banner m-5">BACKEND</p>
        <p className="banner m-5">NEXTJS</p>
        <p className="banner m-5">REACTJS</p>
        <p className="banner m-5">BACKEND</p>
        <p className="banner m-5">NEXTJS</p>
        <p className="banner m-5">BACKEND</p>
        <p className="banner m-5">DESIGN</p>
      </div>
    </div>
  );
};

export default Banner;

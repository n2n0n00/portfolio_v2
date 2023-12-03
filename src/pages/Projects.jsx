import React from "react";
import { arrow, proj1, proj2, proj3 } from "../assets";

const Projects = () => {
  return (
    <div>
      <div className="mx-20 my-[10%] max-md:mt-40 max-md:mx-5">
        <div className="flex flex-row justify-between items-center max-md:flex-col max-md:justify-center max-md:gap-12">
          <div className="flex flex-col max-md:items-center">
            <p className="h4 yellow_text">Portfolio</p>
            <p className="h1 text-white max-md:text-center w-[60%] max-md:w-full">
              Selected works 2020 -2022
            </p>
          </div>
          <div className="flex flex-col w-1/5 max-md:w-3/5 max-md:gap-5">
            <p className="p_reg_white max-md:text-center">
              Check out more portfolios I&apos;ve worked on
            </p>
            <div className="trans_btn w-auto mt-[42px] max-sm:mt-[10px]">
              <p className="body_md max-sm:text-[12px] text-white">View More</p>
              <img src={arrow} />
            </div>
          </div>
        </div>
        <div className="my-20 flex flex-row gap-3 overflow-hidden max-md:flex-col justify-center">
          <img src={proj1} />
          <img src={proj2} />
          <img src={proj3} />
        </div>
      </div>
      <div className="relative w-full mt-[10%]">
        <div className="projects_green_banner overflow-hidden">
          <p className="banner m-1 max-sm:m-1">BACKEND</p>
          <p className="banner m-1 max-sm:m-1">NEXTJS</p>
          <p className="banner m-1 max-sm:m-1">REACTJS</p>
          <p className="banner m-1 max-sm:m-1">BACKEND</p>
          <p className="banner m-1 max-sm:m-1">NEXTJS</p>
          <p className="banner m-1 max-sm:m-1">REACTJS</p>
          <p className="banner m-1 max-sm:m-1">BACKEND</p>
          <p className="banner m-1 max-sm:m-1">NEXTJS</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

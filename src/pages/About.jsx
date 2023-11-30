import React from "react";
import { arrow, cube } from "../assets";

const About = () => {
  return (
    <>
      <div className="m-[80px] max-md:mx-[10px]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between max-md:flex-col-reverse max-md:items-center max-md:justify-center max-md:gap-10 max-md:m-10">
            <div className="text-white w-[50%] max-md:w-[100%] max-md:text-center max-md:flex max-md:flex-col max-md:items-center max-md:gap-10">
              <div>
                <p className="h4 yellow_text">About Me</p>
              </div>
              <div>
                <p className="h2">
                  I can deliver results that exceed your expectations.
                </p>
              </div>
              <div className="trans_btn w-[30%] mt-[42px] max-md:mt-[10px] md:w-[50%] max-md:w-[70%] max-md:mx-[10px]">
                <p className="body_md max-md:text-[12px] text-white">
                  Hire Me Now
                </p>
                <img src={arrow} />
              </div>
            </div>
            <div>
              <img src={cube} />
            </div>
          </div>

          <div className="flex flex-row justify-end max-md:mt-10 max-md:justify-center">
            <p className="p-reg w-[50%] max-md:w-full max-md:m-10 text-white max-md:text-center">
              Hi, I&apos;m Amalia Sanchez I have an Understanding of the
              relationship between design and users through detailed execution
              and proper user experience. I love working on interesting and
              meaningful projects that I can be proud of, and I always strive to
              create clean, pixelated interfaces that are smoothly animated. I
              prefer to prioritize not only code but also quality, perfect
              graphic design and optimized development.
            </p>
          </div>
        </div>
      </div>
      <div className="cube" />
    </>
  );
};

export default About;

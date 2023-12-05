import React from "react";
import { cube } from "../assets";

const Services = () => {
  return (
    <div className="m-20 pt-[15%] max-sm:pt-[30%] max-sm:mx-5 flex flex-col max-md:gap-12 items-center">
      <div className="flex flex-col items-center w-full">
        <p className="yellow_text h4">Services</p>
        <h1 className="h2 text-white max-md:text-center">
          Available services that I can work on
        </h1>
      </div>
      <div className="relatie flex w-full flex-row h-full justify-end items-end">
        <img
          src={cube}
          width={50}
          height={50}
          className="translate-y-10 translate-x-15"
        />
        <img src={cube} width={100} height={100} />
      </div>
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-10 ">
          <p className="h3 text-white">
            <span className="green_text">01.</span> Design Visual
          </p>
          <div className="flex flex-row justify-end max-md:justify-center">
            {" "}
            <p className="p_reg gray_text w-[50%] max-md:w-full">
              Design that is unique, functional, and beautiful is at the heart
              of everything we create. We&apos;re obsessed with user experience,
              designing not for ourselves but for real people with real
              problems.{" "}
            </p>
          </div>

          <div className="flex flex-row w-full justify-center h-[120px] max-sm:flex-col max-sm:my-[50%] max-sm:items-center max-sm:gap-2">
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
          </div>
        </div>
        <div className="m-10">
          <img src={cube} width={50} height={50} />
        </div>
        <div className="flex flex-col gap-10 items-center max-md:items-start">
          <p className="h3 text-white">
            <span className="green_text">02.</span> Design Visual
          </p>

          <p className="p_reg gray_text w-[50%] max-md:w-full">
            Design that is unique, functional, and beautiful is at the heart of
            everything we create. We&apos;re obsessed with user experience,
            designing not for ourselves but for real people with real problems.{" "}
          </p>

          <div className="flex flex-row w-full justify-center h-[120px]  max-sm:flex-col max-sm:my-[50%] max-sm:items-center max-sm:gap-2">
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
            <div className="trans_btn w-1/5 max-sm:w-3/5">
              <p className="text-white p_semibold">UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

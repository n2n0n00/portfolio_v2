import { cube, downblack } from "../assets/index";

const Collaboration = () => (
  <div className="flex flex-col items-center gap-10 ml-20 max-md:ml-0">
    <p className="p_reg yellow_text">Collaboration</p>
    <h1 className="footer_colab text-white w-full text-center">
      Let&apos;s talk to Collaboration
    </h1>
    <div className="flex flex-row gap-5 ">
      <div className="button">
        <div className="text-black items-center justify-center flex flex-row gap-3">
          {" "}
          <img src={downblack} />
          <p>Download CV</p>
        </div>
      </div>
      <div className="trans_btn">
        <p className="text-white">Hire Me Now</p>
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="w-full">
      <div className="mx-20 mb-20 mt-[8%] max-md:mt-[15%]">
        <div className="h-[60vh] max-md:h-full flex flex-row gap-20 w-full items-center justify-center max-md:flex-col mt-[5%]">
          <div className="h-full justify-end flex flex-col">
            <img
              src={cube}
              width={100}
              height={100}
              className="max-md:h-[70px]"
            />
          </div>
          <Collaboration />
          <div className="h-full justify-start flex flex-col">
            <img
              src={cube}
              width={200}
              height={200}
              className="max-md:h-[150px]"
            />
          </div>
        </div>
      </div>
      <div className="h-[1px] gray_line m-20 max-sm:m-10" />
      <div className="flex flex-row max-sm:flex-col-reverse max-sm:gap-10 max-sm:items-center justify-between mx-20 mt-[5%] mb-20 max-sm:mx-10">
        <div className="flex flex-col max-sm:gap-10">
          <p className="body_reg text-white w-[55%] h-full max-sm:text-center max-sm:w-full">
            Working in development and design has given me a stronger sense of
            the extraordinary in my digital work.
          </p>
          <p className="body_reg gray_text max-sm:text-center">
            © Amalia Sanchez. All rights reserved 2022
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <a className="text-white p_reg">Instagram</a>
          <a className="text-white p_reg">Twitter</a>
          <a className="text-white p_reg">Youtube</a>
          <a className="text-white p_reg">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

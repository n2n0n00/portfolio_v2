import { download, logo } from "../assets/index";

const Home = () => {
  return (
    <div className="home_bg">
      <div className="flex flex-row justify-between mx-[80px] max-sm:mx-[10px]">
        <img src={logo} className="mt-[42px]  max-sm:mt-[10px]" />
        <div className="trans_btn w-auto mt-[42px] max-sm:mt-[10px]">
          <img src={download} />
          <p className="body_md max-sm:text-[12px] text-white">Download CV</p>
        </div>
      </div>
      <div className="mt-[20%] mx-[80px] max-sm:mx-[10px]">
        <div className="flex flex-col items-start justify-start">
          <h1 className="display text-white">Athena Tzouveleki</h1>
          <p className="p_reg max-md:text-[16px] max-sm:text-[12px] mb-[10%]">
            Hello, my name is Athena, nice to meet you I would like to welcome
            you with my personal portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

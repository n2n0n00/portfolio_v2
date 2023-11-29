import { download, logo } from "../assets/index";

const Home = () => {
  return (
    <div className="home_bg">
      <div className="flex flex-row justify-between mx-[80px]">
        <img src={logo} className="mt-[42px]" />
        <div className="trans_btn mt-[42px]">
          <img src={download} />
          <p className="body_md text-white">Download CV</p>
        </div>
      </div>
      <div className="mt-[20%] mx-[80px]">
        <div className="flex flex-col items-start justify-start">
          <h1 className="display text-white">Athena Tzouveleki</h1>
          <p className="p_reg  mb-[10%]">
            Hello, my name is Athena, nice to meet you I would like to welcome
            you with my personal portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

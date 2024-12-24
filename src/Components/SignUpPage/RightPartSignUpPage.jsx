import { useState } from "react";
import logo from "../../assets/Images/logo.png";
import Saas from "./Saas";
import SelfHosted from "./SelfHosted";

const RightPartSignUpPage = () => {
  const [activeTab, setActiveTab] = useState("SAAS");

  return (
    <div className="flex items-center justify-center h-screen flex-col w-full">
      <div className="bg-white shadow-md rounded-lg md:w-[87%] w-[94%] font-inter">
        <div className="text-center mb-4 gap-6  flex flex-col mt-6">
          <div className="flex items-center gap-3 justify-center">
            <img src={logo} alt={"logo"} className={`w-6`} />
            <p className="text-[24px] font-light text-[#181D27]">CodeAnt AI</p>
          </div>
          <h1 className="text-[26px] font-[600] tracking-wide">
            Welcome to CodeAnt AI
          </h1>
        </div>

        <div className="w-[90%] m-auto p-[1px] relative rounded-lg bg-gray-200 mb-5">
          <div
            className={`absolute  w-[50%] h-[100%] top-0 ${
              activeTab === "SAAS" ? "left-0" : "left-[50%]"
            } bg-[#1570EF] rounded-lg transition-all duration-300 `}
          ></div>
          <button
            type="button"
            className={`w-[50%] p-3 cursor-pointer ${
              activeTab === "SAAS" && "text-white"
            } transition-all duration-300  bg-gray-200 relative bg-transparent font-[600]`}
            onClick={() => setActiveTab("SAAS")}
          >
            SAAS
          </button>
          <button
            type="button"
            className={`w-[50%] p-[10px] cursor-pointer bg-gray-200 outline-none ${
              activeTab === "Self Hosted" && "text-white"
            } transition-all duration-300  relative bg-transparent font-[600]`}
            onClick={() => setActiveTab("Self Hosted")}
          >
            Self Hosted
          </button>
        </div>

        <hr className="w-[100%]" />

        {activeTab === "SAAS" && <Saas />}
        {activeTab === "Self Hosted" && <SelfHosted />}
      </div>
      <div className="text-center mt-6 font-inter text-[14px]">
        By signing up you agree to the{" "}
        <a href="/" className="font-bold">
          Privacy Policy.
        </a>
      </div>
    </div>
  );
};

export default RightPartSignUpPage;

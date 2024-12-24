import subtract from "../../assets/Images/Subtract.png";
import logo from "../../assets/Images/logo.png";
import vector from "../../assets/Images/Vector.png";
import { FaArrowUp } from "react-icons/fa6";
import RightPartSignUpPage from "./RightPartSignUpPage";

const SignUp = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[50%] bg-white hidden items-center md:flex">
        <div className="rounded-xl shadow-lg w-[60%] border m-auto mt-[25%] relative">
          <div className="flex items-center gap-2 border-b p-4">
            <img src={logo} alt="logo" className="w-[25px]" />
            <p className="font-semibold font-inter text-[18px]">
              AI to Detect & Autofix Bad Code
            </p>
          </div>
          <div className="flex justify-between items-center p-5 font-inter">
            <div className="flex flex-col items-center">
              <p className="text-[20px] font-bold">30+</p>
              <p className="text-[13px]">Language Support</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[20px] font-bold">10K+</p>
              <p className="text-[13px]">Developers</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[20px] font-bold">100K+</p>
              <p className="text-[13px]">Hours Saved</p>
            </div>
          </div>

          <div className="absolute shadow-lg rounded-xl p-3 px-6 border bg-white top-[89%] right-[-5%] font-inter">
            <div className="flex items-center gap-20">
              <div className="flex items-center justify-center p-4 bg-[#E6E3FD] rounded-full">
                <img src={vector} alt="vector" className="w-[17px]" />
              </div>
              <div>
                <p className="text-[13px] flex items-center text-[#326FD9]">
                  <span>
                    <FaArrowUp className="text-[#326FD9]" />
                  </span>
                  14%
                </p>
                <p className="text-[11px]">This week</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[11px] font-bold">Issues Fixed</p>
              <p className="text-[26px] font-bold">500K+</p>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0">
          <img src={subtract} alt="img" />
        </div>
      </div>
      <div className="md:w-[50%] w-[100%] bg-[#F7F5F5] flex items-center justify-center">
        <RightPartSignUpPage />
      </div>
    </div>
  );
};

export default SignUp;

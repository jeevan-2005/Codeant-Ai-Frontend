import { HiCodeBracket } from "react-icons/hi2";
import { IoChevronDown } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { LiaBookSolid } from "react-icons/lia";
import { IoMdCloudOutline } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/Images/logo.png";
import { useEffect, useRef, useState } from "react";

const SideBar = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isMobileRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const isMobileLocal = width < 768;
      if (isMobileLocal) {
        setIsMobile(true);
        isMobileRef.current = true;
      } else {
        setIsMobile(false);
        isMobileRef.current = false;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col w-full md:w-[242px] bg-white md:h-screen border-r fixed md:static font-inter">
      <div
        className={`flex items-center justify-between md:justify-around w-full px-5 ${
          isMobile &&( !isSideBarVisible && "border-b border-gray-200")
        }`}
      >
        <div className="flex items-center gap-3 justify-center h-[69px] cursor-pointer">
          <img src={logo} alt={"logo"} className={`w-6`} />
          <h1 className="text-[24px] text-[#181D27]">CodeAnt AI</h1>
        </div>

        <div className={`md:hidden flex items-center justify-center`}>
          <button
            onClick={() => {
              setIsSideBarVisible((prev) => !prev);
            }}
          >
            {isSideBarVisible ? (
              <RxCross2 className={`size-6`} />
            ) : (
              <HiMiniBars3 className={`size-6`} />
            )}
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-1 bg-gray-300 bg-opacity-65  h-screen w-full md:static md:h-full translate-y-full md:-translate-y-0 overflow-hidden transition-all p-0"
        style={{
          height: isMobile
            ? isSideBarVisible
              ? "calc(100vh - 65px)"
              : "0px"
            : "100%",
        }}
      >
        <div className="flex flex-col bg-white w-full md:h-full">
          <div className="flex md:justify-around justify-between p-2 h-[40px] md:w-[202px] md:my-2 my-3 w-[90%] m-auto items-center border rounded-xl">
            <span className="text-[16px]">
              {isMobile ? "UtkarshDhairyaPanwar" : "UtkarshDhairyaPa..."}
            </span>
            <IoChevronDown className={`w-5`} />
          </div>

          <nav className="flex-1 md:w-[210px] w-[90%] m-auto mt-4 space-y-2">
            <a
              href="#"
              onClick={() => setActiveIndex(0)}
              className={`flex items-center px-[14px] py-[10px] text-[16px] text-gray-700 rounded-lg hover:bg-gray-100 ${
                activeIndex === 0 && "!bg-[#1570EF] !text-white"
              }`}
            >
              <span className="">
                <AiOutlineHome className={`w-6 text-[18px]`} />
              </span>
              <span className="ml-3">Repositories</span>
            </a>
            <a
              href="#"
              onClick={() => setActiveIndex(1)}
              className={`flex items-center px-[14px] py-[10px] text-[16px] text-gray-700 rounded-lg hover:bg-gray-100 ${
                activeIndex === 1 && "!bg-[#1570EF] !text-white"
              }`}
            >
              <span className="">
                <HiCodeBracket className={`w-6 text-[18px]`} />
              </span>
              <span className="ml-3">AI Code Review</span>
            </a>
            <a
              href="#"
              onClick={() => setActiveIndex(2)}
              className={`flex items-center px-[14px] py-[10px] text-[16px] text-gray-700 rounded-lg hover:bg-gray-100 ${
                activeIndex === 2 && "!bg-[#1570EF] !text-white"
              }`}
            >
              <span className="">
                <IoMdCloudOutline className={`w-6 text-[18px]`} />
              </span>
              <span className="ml-3">Cloud Security</span>
            </a>
            <a
              href="#"
              onClick={() => setActiveIndex(3)}
              className={`flex items-center px-[14px] py-[10px] text-[16px] text-gray-700 rounded-lg hover:bg-gray-100 ${
                activeIndex === 3 && "!bg-[#1570EF] !text-white"
              }`}
            >
              <span className="">
                <LiaBookSolid className={`w-6 text-[18px]`} />
              </span>
              <span className="ml-3">How to Use</span>
            </a>
            <a
              href="#"
              onClick={() => setActiveIndex(4)}
              className={`flex items-center px-[14px] py-[10px] text-[16px] text-gray-700 rounded-lg hover:bg-gray-100 ${
                activeIndex === 4 && "!bg-[#1570EF] !text-white"
              }`}
            >
              <span className="">
                <IoSettingsOutline className={`w-6 text-[18px]`} />
              </span>
              <span className="ml-3">Settings</span>
            </a>
          </nav>

          <div className="space-y-2 md:w-[210px] w-[90%] m-auto my-2">
            <a
              href="#"
              onClick={() => setActiveIndex(5)}
              className={`flex items-center px-[14px] py-[10px] text-[16px] text-gray-700 rounded-lg hover:bg-gray-100 ${
                activeIndex === 5 && "!bg-[#1570EF] !text-white"
              }`}
            >
              <span className="">
                <FiPhone className={`w-6 text-[18px]`} />
              </span>
              <span className="ml-3">Support</span>
            </a>
            <a
              href="#"
              onClick={() => setActiveIndex(6)}
              className={`flex items-center px-[14px] py-[10px] text-[16px] text-gray-700 rounded-lg hover:bg-gray-100 ${
                activeIndex === 6 && "!bg-[#1570EF] !text-white"
              }`}
            >
              <span className="">
                <FiLogOut className={`w-6 text-[18px]`} />
              </span>
              <span className="ml-3">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

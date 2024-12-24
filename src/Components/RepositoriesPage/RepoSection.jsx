import { FiRefreshCw } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import RepoInfo from "./RepoInfo";

const RepoSection = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-[#F7F5F5] h-screen md:w-[calc(100%-242px)] mt-[64px] md:mt-0 w-full md:p-3">
      <div className="bg-white w-full h-full rounded-xl flex flex-col">
        <div className="p-5 flex flex-col gap-3 border-b">
          <div className="flex justify-between flex-col md:items-center md:flex-row">
            <div className="">
              <h2 className="font-semibold font-inter text-[22px] text-[#181D27]">
                Repositories
              </h2>
              <small className="text-[#414651] text-[12px] font-inter">
                33 total repositories
              </small>
            </div>
            <div className="flex items-center md:justify-center my-2 md:my-0 gap-3 font-inter">
              <button className="flex items-center gap-2 px-3 py-2 text-[#414651]  border rounded-lg shadow-sm text-[13px]">
                <span>
                  <FiRefreshCw className="w-5 text-[16px]" />
                </span>{" "}
                Refresh All
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-[#ffffff] bg-[#1570EF] border rounded-lg shadow-sm text-[13px]">
                <span>
                  <IoAddOutline className="w-5 text-[21px]" />
                </span>
                Add Repository
              </button>
            </div>
          </div>
          <div className="flex items-center px-2 text-[#414651] border md:w-[366px] w-full  rounded-lg shadow-sm">
            <span>
              <IoIosSearch className="w-5 text-[21px] cursor-pointer" />
            </span>
            <input
              type="text"
              placeholder="Search Repositories"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 text-[#414651] text-[13px] w-[400px] focus:outline-none"
            />
          </div>
        </div>
        <RepoInfo />
      </div>
    </div>
  );
};

export default RepoSection;

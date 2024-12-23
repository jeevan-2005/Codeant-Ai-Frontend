import { repoData } from "../repoData";
import { BsDatabase } from "react-icons/bs";

const RepoInfo = () => {
  return (
    <div className="overflow-y-scroll">
      {repoData.map((repo, index) => (
        <div key={index} className="flex flex-col items-start gap-2 font-inter p-3 border-b hover:bg-[#f7f5f5] last:rounded-b-xl">
          <div className="flex items-center gap-3">
            <p className="text-[18px] font-[400] pb-[1px]">{repo.title}</p>
            <small className="text-[#326FD9] bg-[#EFF8FF] border rounded-full border-[#326FD9] px-2">
              {repo.type}
            </small>
          </div>
          <div className="flex items-center gap-10 text-[13.5px]">
            <div className="flex items-center gap-2">
              <p className="text-gray-700 tracking-normal">{repo.language}</p>
              <span className="bg-[#326FD9] w-[6px] h-[6px] rounded-full"></span>
            </div>
            <p className="flex items-center gap-1">
              <span><BsDatabase className="w-4"/></span>
              {repo.size}
            </p>
            <p>{repo.updatedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoInfo;

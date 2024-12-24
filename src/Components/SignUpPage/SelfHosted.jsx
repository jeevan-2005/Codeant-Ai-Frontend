import { GoKey } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import gitlab from "../../assets/Images/gitlab.png";

const SelfHosted = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 my-5 md:w-[60%] w-[90%] m-auto mb-[151px]">
      <button
        className="w-full flex items-center font-[600] justify-center px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/repositories")}
      >
        <img src={gitlab} alt="GitLab Icon" className="w-5 h-5 mr-2" />
        Sign in with GitLab
      </button>
      <button
        className="w-full flex items-center font-[600] justify-center px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/repositories")}
      >
        <div>
          <GoKey className="w-5 h-5 mr-2" />
        </div>
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SelfHosted;

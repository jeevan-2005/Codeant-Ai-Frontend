import { FaGithub } from "react-icons/fa";
import bitBucketImage from "../../assets/Images/bitbucket.png";
import azureImage from "../../assets/Images/azure.png";
import gitlab from "../../assets/Images/gitlab.png";
import { useNavigate } from "react-router-dom";

const Saas = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 my-5 md:w-[60%] w-[90%] m-auto">
      <button
        className="w-full flex items-center font-[600] justify-center px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/repositories")}
      >
        <div>
          <FaGithub className="w-5 h-5 mr-2" />
        </div>
        Sign in with GitHub
      </button>
      <button
        className="w-full flex items-center font-[600] justify-center px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/repositories")}
      >
        <img
          src={bitBucketImage}
          alt="Bitbucket Icon"
          className="w-5 h-5 mr-2"
        />
        Sign in with Bitbucket
      </button>
      <button
        className="w-full flex items-center font-[600] justify-center px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/repositories")}
      >
        <img
          src={azureImage}
          alt="Azure DevOps Icon"
          className="w-5 h-5 mr-2"
        />
        Sign in with Azure DevOps
      </button>
      <button
        className="w-full flex items-center font-[600] justify-center px-4 py-3 border rounded-lg text-gray-700 hover:bg-gray-100"
        onClick={() => navigate("/repositories")}
      >
        <img src={gitlab} alt="GitLab Icon" className="w-5 h-5 mr-2" />
        Sign in with GitLab
      </button>
    </div>
  );
};

export default Saas;

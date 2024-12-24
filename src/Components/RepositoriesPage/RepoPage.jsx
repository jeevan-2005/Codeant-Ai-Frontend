import SideBar from "../SideBar";
import RepoSection from "./RepoSection";

const RepoPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar activeInd={0} />
      <RepoSection />
    </div>
  );
};

export default RepoPage;

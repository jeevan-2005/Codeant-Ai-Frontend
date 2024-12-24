import SideBar from "../SideBar";
import NotFound from "../NotFound";

const AiCodeReviewPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar activeInd={1} />
      <NotFound />
    </div>
  );
};

export default AiCodeReviewPage;

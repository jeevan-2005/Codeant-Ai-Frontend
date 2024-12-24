import SideBar from "../SideBar";
import NotFound from "../NotFound";

const Guide = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar activeInd={3} />
      <NotFound />
    </div>
  );
};

export default Guide;

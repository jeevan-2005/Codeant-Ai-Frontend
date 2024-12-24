import SideBar from "../SideBar";
import NotFound from "../NotFound";

const Settings = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar activeInd={4} />
      <NotFound />
    </div>
  );
};

export default Settings;

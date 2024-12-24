import NotFound from "../NotFound";
import SideBar from "../SideBar";

const CloudSecurity = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SideBar activeInd={2} />
      <NotFound />
    </div>
  );
};

export default CloudSecurity;

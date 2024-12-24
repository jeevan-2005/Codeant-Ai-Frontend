import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUpPage/SignUp";
import RepoPage from "./Components/RepositoriesPage/RepoPage";
import AiCodeReviewPage from "./Components/AICodeReviewPage/AiCodeReviewPage";
import CloudSecurity from "./Components/CloudSecurity/CloudSecurity";
import Guide from "./Components/Guide/Guide";
import Settings from "./Components/Settings/Settings";
import Support from "./Components/Support/Support";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/repositories" element={<RepoPage />} />
      <Route path="/ai-code-review" element={<AiCodeReviewPage />} />
      <Route path="/cloud-security" element={<CloudSecurity />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default AllRoutes;

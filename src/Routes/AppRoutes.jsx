import { Routes, Route, Navigate } from "react-router-dom";
// import useLastPageTracker from "../Hooks/useLastPageTracker";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FindJobs from "../pages/FindJobs";
import Companies from "../pages/Companies";
import MyJob from "../pages/MyJob";
import Messages from "../pages/Messages";
import JobDetails from "../pages/JobDetails";
import Profile from "../pages/Profile";
import Notification from "../pages/Notification";
import Setting from "../pages/Setting";
import Help from "../pages/Help";
import CompniDetails from "../pages/CompniDetails";

const AppRoutes = ({ isLoggedIn, handleLogout }) => {
  // useLastPageTracker();

  return isLoggedIn ? (
    <>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home onLogout={handleLogout} />} />
        <Route path="/FindJobs" element={<FindJobs />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/MyJob" element={<MyJob />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/job-detail/:id" element={<JobDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Compni-Detail/:id" element={<CompniDetails />} />
      </Routes>
    </>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;

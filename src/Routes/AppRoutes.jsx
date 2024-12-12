import { Routes, Route, Navigate } from "react-router-dom";
import useLastPageTracker from "../hooks/useLastPageTracker";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import JobList from "../pages/JobList";
import Companies from "../pages/Companies";
import MyJob from "../pages/MyJob";
import Messages from "../pages/Messages";

const AppRoutes = ({ isLoggedIn, handleLogout }) => {
  useLastPageTracker();

  return isLoggedIn ? (
    <>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home onLogout={handleLogout} />} />
        <Route path="/JobList" element={<JobList />} />
        <Route path="/Companies" element={<Companies />} />
        <Route path="/MyJob" element={<MyJob />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="*" element={<Navigate to="/" />} />
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
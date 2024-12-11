import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Companies from "./pages/Companies";
import JobList from "./pages/JobList";
import MyJob from "./pages/MyJob";
import Messages from "./pages/Messages";

const AppRoutes = ({ isLoggedIn, setIsLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Save current page in localStorage whenever location changes
  useEffect(() => {
    localStorage.setItem("lastVisitedPage", location.pathname);
  }, [location]);

  // On app load, check for last visited page and navigate there
  useEffect(() => {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");
    if (lastVisitedPage && lastVisitedPage !== "/") {
      navigate(lastVisitedPage);
    }
  }, [navigate]);

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
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <AppRoutes
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        handleLogout={handleLogout}
      />
    </BrowserRouter>
  );
};

export default App;

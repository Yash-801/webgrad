import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useLastPageTracker = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lastVisitedPage", location.pathname);
  }, [location]);

  useEffect(() => {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");
    if (lastVisitedPage && lastVisitedPage !== "/") {
      navigate(lastVisitedPage);
    }
  }, [navigate]);
};

export default useLastPageTracker;

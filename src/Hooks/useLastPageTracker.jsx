import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useLastPageTracker = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      sessionStorage.setItem("currentPage", location.pathname);
    }

    const handlePopState = () => {
      const previousPage = window.history.state?.usr?.pathname || "/";
      sessionStorage.setItem("currentPage", previousPage);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location.pathname]);

  useEffect(() => {
    const savedPage = sessionStorage.getItem("currentPage");

    if (savedPage && window.performance && performance.navigation.type === 1) {
      navigate(savedPage);
    }
  }, []);
};

export default useLastPageTracker;

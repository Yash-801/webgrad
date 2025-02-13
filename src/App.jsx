import { BrowserRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./Store/authSlice";
import AppRoutes from "./Routes/AppRoutes";
import { useEffect } from "react";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    dispatch(logout());
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      dispatch(login());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </BrowserRouter>
  );
};

export default App;

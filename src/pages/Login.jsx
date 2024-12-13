// --- pages/Login.jsx ---
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../Context/authSlice";
import grad from "../assets/grad.png";
import lock from "../assets/lock.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://64.227.184.231:4142/api/user/sign-in";

      const loginData = {
        email: username,
        password: password,
      };

      const response = await axios.post(url, loginData);

      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        dispatch(login());
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Invalid username or password");
    }
  };

  const handleMouseDown = () => {
    setShowPassword(true);
  };

  const handleMouseUp = () => {
    setShowPassword(false);
  };

  return (
    <div className="main">
      <div className="form-sec">
        <div className="formsec-2">
          <div className="gradlogo2">
            <img src={grad} alt="grad" className="gradlogo" />
          </div>
          <div className="sigename">
            <h1 className="sigh1">Sign In</h1>
          </div>
          <form onSubmit={handleLogin} className="formiput">
            <div>
              <div className="emailiput">
                <img
                  src={lock}
                  alt="email"
                  className="emaillogo h-5 w-5 mx-2"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="emeput2"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div
                className="emailiput1"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={lock}
                  alt="lock"
                  className="emaillogo2 h-6 w-6 mx-2"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="emeput3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  style={{
                    position: "absolute",
                    right: "10px",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  👁️
                </button>
              </div>
              {errorMessage && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {errorMessage}
                </p>
              )}
              <input
                type="submit"
                name="login"
                id="login"
                value="Log In"
                className="ilogin"
              />
            </div>
          </form>
          <div className="forlink">
            <a href="">Forget Password?</a>
          </div>
          <p className="background">
            <span>or</span>
          </p>
          <div className="inputbtn">
            <button className="gbtn">
              <img src={google} alt="google" className="glogo" />
              Google
            </button>
            <button className="fbtn">
              <img src={facebook} alt="facebook" className="flogo" />
              Facebook
            </button>
          </div>
          <div className="lline">
            Don’t have an account?<span className="lline2">Sign Up</span>
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="text-content">
          <h1 className="texth1">
            The future belongs to those who <br />
            <span className="txtspn1">believe </span>in the
            <span className="txtspn2"> beauty of their dreams.</span>
          </h1>
          <p className="textp">- Eleanor Roosevelt</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

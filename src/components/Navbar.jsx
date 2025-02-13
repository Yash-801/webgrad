import React, { useState } from "react";
import home from "../assets/home.png";
import job from "../assets/job.svg";
import list from "../assets/list.svg";
import message from "../assets/message.png";
import bell from "../assets/bell.svg";
import logo from "../assets/logo.jpg";
import downarrow from "../assets/downarrow.svg";
import grad from "../assets/grad.png";
import { NavLink, useNavigate } from "react-router-dom";
import LogOut from "../assets/LogOut.svg";
import Help from "../assets/Help.svg";
import Profile from "../assets/Profile.svg";
import Setting from "../assets/Setting.svg";
import { FaBars } from "react-icons/fa";

export const NavItem = ({ imgSrc, label }) => (
  <div className="options2 d flex items-center justify-center p-2 text-xs font-semibold">
    <img src={imgSrc} alt={label} className="mr-2 h-5 w-5" />
    {label}
  </div>
);

const Navbar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const navigate = useNavigate();

  const NavItems = [
    { imgSrc: home, label: "Home", path: "/" },
    { imgSrc: job, label: "Find Jobs", path: "/FindJobs" },
    { imgSrc: job, label: "Companies", path: "/companies" },
    { imgSrc: list, label: "MyJob", path: "/MyJob" },
    { imgSrc: message, label: "Message", path: "/Messages" },
  ];

  return (
    <div className="container-fluid navbar relative flex w-full items-center justify-between bg-white px-[4%] py-7">
      <div className="aiimg flex items-center">
        <button
          className="mr-4 text-xl focus:outline-none lg:hidden"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <img
          onClick={() => navigate("/")}
          src={grad}
          alt="image"
          className="aiimg2 h-auto max-w-40 cursor-pointer md:h-auto md:max-w-56"
        />
      </div>

      <div className="options hidden flex-row items-center justify-center lg:flex">
        {NavItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <img src={item.imgSrc} alt={item.label} className="mr-2 h-5 w-5" />
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="d flex">
        <div className="d mr-3 flex">
          <img
            src={bell}
            alt="bell"
            className="h-8 w-8 pt-2 hover:cursor-pointer"
            onClick={() => navigate("/Notification")}
          />
        </div>
        <div
          onClick={toggleDropdown}
          className="flex items-center justify-between hover:cursor-pointer md:rounded-[20px] md:border-[1px] md:border-[#004d7e]"
        >
          <div className="flex h-9 items-center md:mr-2">
            <img
              src={logo}
              alt="logo"
              className="mx-1 h-[30px] w-[30px] rounded-full"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-xs font-semibold">Zadafiya</p>
          </div>
          <div className="mx-1">
            <img src={downarrow} alt="downarrow" />
          </div>
        </div>
        {isOpen && (
          <div
            className="absolute mt-2 rounded bg-white shadow-md"
            style={{ right: "0", top: "100%", minWidth: "150px", zIndex: 10 }}
          >
            <ul>
              <div
                onClick={() => navigate("/profile")}
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-200"
              >
                <img src={Profile} alt="profile" className="mr-1 h-5 w-5" />
                <li className="font-normal">Profile</li>
              </div>
              <div
                onClick={() => navigate("/Setting")}
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-200"
              >
                <img src={Setting} alt="profile" className="mr-1 h-5 w-5" />
                <li className="font-normal">Settings</li>
              </div>
              <div
                onClick={() => navigate("/Help")}
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-200"
              >
                <img src={Help} alt="profile" className="mr-1 h-5 w-5" />
                <li className="font-normal">Help & Support</li>
              </div>
              <div
                onClick={onLogout}
                className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-200"
              >
                <img src={LogOut} alt="profile" className="mr-1 h-5 w-5" />
                <li className="font-normal">Logout</li>
              </div>
            </ul>
          </div>
        )}
      </div>

      {isSidebarOpen && (
        <div className="z-1 fixed inset-0 flex bg-black bg-opacity-50">
          <div className="h-full w-64 bg-white p-4 shadow-md">
            <button
              className="mb-4 w-full text-right text-xl font-bold"
              onClick={toggleSidebar}
            >
              &times;
            </button>
            {NavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm font-medium hover:bg-gray-200 ${
                    isActive ? "bg-gray-200" : ""
                  }`
                }
                onClick={toggleSidebar}
              >
                <img
                  src={item.imgSrc}
                  alt={item.label}
                  className="mr-2 inline h-5 w-5"
                />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

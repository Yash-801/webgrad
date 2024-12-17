import React, { useState } from "react";
import home from "../assets/home.png";
import job from "../assets/job.svg";
import list from "../assets/list.svg";
import message from "../assets/message.png";
import bell from "../assets/bell.svg";
import logo from "../assets/logo.jpg";
import downarrow from "../assets/downarrow.svg";
import grad from "../assets/grad.png";
import { NavLink } from "react-router-dom";
import LogOut from "../assets/LogOut.svg";
import Help from "../assets/Help.svg";
import Profile from "../assets/Profile.svg";
import Setting from "../assets/Setting.svg";

export const NavItem = ({ imgSrc, label }) => (
  <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
    <img src={imgSrc} alt={label} className="h-5 w-5 mr-2" />
    {label}
  </div>
);

const Navbar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const NavItems = [
    { imgSrc: home, label: "Home", path: "/" },
    { imgSrc: job, label: " JobList", path: "/JobList" },
    { imgSrc: job, label: "Companies", path: "/companies" },
    { imgSrc: list, label: "MyJob", path: "/MyJob" },
    { imgSrc: message, label: "message", path: "/Messages" },
  ];

  return (
    <div className="navbar py-7 px-8 flex items-center justify-between w-full bg-white">
      <div className="aiimg">
        <img src={grad} alt="image" className="aiimg2" />
      </div>

      <div className="options  flex items-center justify-center flex-row">
        {NavItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <img src={item.imgSrc} alt={item.label} className="h-5 w-5 mr-2" />
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="d flex">
        <div className="d flex mr-3">
          <img
            src={bell}
            alt="bell"
            className="h-8 w-8 pt-2 hover:cursor-pointer"
          />
        </div>
        <div
          onClick={toggleDropdown}
          className="toglmenu d flex items-center justify-between hover:cursor-pointer"
        >
          <div className="h-9 w-9 overflow-auto d flex items-center mr-2">
            <img src={logo} alt="logo" className="proimg h-7 w-7 ms-1" />
          </div>
          <div>
            <p className="font-semibold text-xs">Zadafiya</p>
          </div>
          <div className="mx-1">
            <img src={downarrow} alt="downarrow" />
          </div>
        </div>
        {isOpen && (
          <div
            className="absolute bg-white shadow-md rounded mt-2"
            style={{ right: "0", top: "100%", minWidth: "150px", zIndex: 10 }}
          >
            <ul className=" ">
              <div className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-200">
                <img src={Profile} alt="profile" className="h-5 w-5 mr-1" />
                <li className=" font-normal">Profile</li>
              </div>
              <div className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-200">
                <img src={Setting} alt="profile" className="h-5 w-5 mr-1" />
                <li className=" font-normal">Settings</li>
              </div>
              <div className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-200">
                <img src={Help} alt="profile" className="h-5 w-5 mr-1" />
                <li className=" font-normal">Help % Support</li>
              </div>
              <div
                onClick={onLogout}
                className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-200"
              >
                <img src={LogOut} alt="profile" className="h-5 w-5 mr-1" />
                <li className=" font-normal">Logout</li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

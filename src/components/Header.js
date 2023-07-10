// dependencies
import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/logo1.png";
import Resume from "../pages/Resume";
import "../index.css";
// import { useLocation } from "react-router-dom";

// navbar header
function Header() {
//   const [showResumeModal, setshowResumeModal] = useState(false);

//   const location = useLocation();
//   const { pathname } = location;
//   const isPathEmpty = pathname.length === 1;

  return (



        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />

  );
}

export default Header;

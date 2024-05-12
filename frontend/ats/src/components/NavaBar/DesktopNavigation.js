import React from "react";

import NavLinks from "./NavLinks";
import "./NavBar.css";
import LoginPage from "../loginpage/LoginPage";


const DesktopNavigation = () => {
  return (
    <div className="mainnav">
      <nav className="DesktopNavigation">
        <h2 className="logo">Hire</h2>
        
        <NavLinks />
      </nav>
     
    </div>
  );
};

export default DesktopNavigation;

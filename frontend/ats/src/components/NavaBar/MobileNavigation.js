import React from "react";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import '../loginpage/loginpage.css'
import LoginPage from "../loginpage/LoginPage";

import NavLinks from "./NavLinks";
import "./NavBar.css";

const MobileNavigation = () => {
  const [click, setclick] = useState(false);

  

  const Hamburger = (
    <IoMdMenu
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={() => setclick(!click)}
      
    />
    
  );

  

  


  const Close = <IoClose className="HamburgerMenu"
             size="30px" color="black"
            onClick={() => setclick(!click)} />

const closeMenu = () => setclick(false);

  return (
    <nav className="MobileNavigation">
      <h2 className="logo">            Hire</h2>
      {  click ? Close :   Hamburger}
      {click && <NavLinks  isClicked={true} closeMenu={closeMenu}   />}
      
      
    </nav>
  );
};

export default MobileNavigation;

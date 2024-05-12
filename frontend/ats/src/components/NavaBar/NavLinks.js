import React from "react";

import "./NavBar.css";

import { Link } from "react-router-dom";

const NavLinks = ({ isClicked, closeMenu }) => {
  return (
    <div className="nav">
      <div className="mainlink">
        <nav className="NavLinks">
          <ul>
            <li>
              <Link to="/DashBoard">
                <i class="ri-dashboard-line"></i>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/Jobs">
                <i class="ri-briefcase-2-line"></i>Jobs
              </Link>
            </li>
            <li>
              <Link to="/Candidates">
                <i class="ri-user-line"></i>Candidates
              </Link>
            </li>
            <li>
              <Link to="/Clients">
                <i class="ri-group-line"></i>Clients
              </Link>
            </li>
            <li>
              <Link to="https://mail.google.com"  target="_blank">
                <i class="ri-mail-line"></i>Mails
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login">
        <Link to='/LoginPage'>Login</Link>
      </div>
    </div>
  );
};

export default NavLinks;

import React from "react";

import "./signup.css";
import signin from "../../assets/undraw_sign_in_re_o58h.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="loginpage">
      <div className="loginimg">
        <img src={signin} alt="" width="350px" />
      </div>
      <div className="loginmain">
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" placeholder="First Name" />
          <br />
          <input type="text" placeholder="Last Name" />
          <br />
          <input type="mail" placeholder="Enter Email Address" />
          <br />
          <input type="password" placeholder="Enter Password" />
          <br />
          <br />

          <h3   id="sili">
            Already a member? <Link to="/LoginPage"> Login </Link>
          </h3>
          <button type="button">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

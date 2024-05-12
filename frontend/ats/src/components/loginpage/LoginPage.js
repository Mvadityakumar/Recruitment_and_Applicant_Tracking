import React, { useState } from "react";
import "./loginpage.css";
import signin from '../../assets/undraw_sign_up_n6im.svg'
import { Link } from "react-router-dom";


const LoginPage = () => {

    const[press,setPress]= useState()

    

    





  return (
    
    <div className="loginpage">
      <div className="loginimg">
        <img src={signin} alt=""  width='350px'/>
      </div>
      <div className="loginmain">
        <h1>Login</h1>
        <form action="">
          <input type="mail" placeholder="Enter Email Address" /><br/>
          <input type="password" placeholder="Enter Password" /><br/>
          <button type="button">Continue</button>
          <h3>
            Don't have an account? <Link  to='/Signup'> Create  </Link>
          </h3>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

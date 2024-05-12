import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../components/loginpage/LoginPage";
import Signup from "../components/signup/Signup";

import DashBoard from "../Pages/DashBoard";
import NotFound from "../Pages/NotFound";
import Jobs from "../Pages/Jobs";
import Candidates from "../Pages/Candidates";
import Clients from "../Pages/Clients";
import PersonalDetails from "../components/personaldetails/PersonalDetails";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/DashBoard" />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/Jobs" element={<Jobs />} />
      <Route path="/Candidates" element={<Candidates />} />
      <Route path="/Clients" element={<Clients />} />
      
      <Route path="/Personaldetails" element={<PersonalDetails/>}/>   
    </Routes>
  );
};

export default Routers;

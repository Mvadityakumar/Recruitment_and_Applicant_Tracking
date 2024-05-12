import React from "react";
import Bars from "../components/charts/Bars";

import Tables from "../components/tables/Tables";
import '../styles/dashboard.css'
import SimpleAreaa from "../components/charts/SimpleAreaa";
import Circle from "../components/charts/Circle";

const DashBoard = () => {
  return (
    <section className="mainbox">
      <div className="subbox1">
        <div className="box1">
          <h3>Total Job Posting</h3>
          <p>1000</p>
        </div>
        <div className="box1">
          <h3>Total Candidates Hired</h3>
          <p>370</p>
        </div>
        <div className="box1">
          <h3>No of Companies</h3>
          <p>57</p>
        </div>
        <div className="box1">
          <h3>Total Candidates Rejected</h3>
          <p>620</p>
        </div>
      </div>
      
      <div className="subbox2">
        
        
        <Bars/>
        <Tables/>
        
        
       
      </div>
      <div className="subbox3">
        <SimpleAreaa/>
        <Circle/>
      </div>
    </section>
  );
};

export default DashBoard;

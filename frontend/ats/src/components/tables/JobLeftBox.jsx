import React from "react";
import "./jobleftbox.css";

const JobLeftBox = () => {
  return (
    <div className="leftmain">
      <div className="leftboxbutton">
        <button type="button">Add New Job</button>
      </div>
      <div className="jobcheckbox">
        <form action="">
          <input type="checkbox" id="alljobs" name="Jobs" value="" />
          All Jobs
          <br />
          <br />
          <input type="checkbox" id="activejobs" name="Jobs" value="" />
          Active Jobs
          <br />
          <br />
          <input type="checkbox" id="pendingjobs" name="Jobs" value="" />
          Pending Jobs
          <br />
          <br />
          <input type="checkbox" id="closedjobs" name="Jobs" value="" />
          Closed Jobs
          <br />
          <br />
        </form>
      </div>
      <div className="leftboxoption1">
        <h3>Department</h3>
        <br />
        <select name="department" id="department">
          <option value="">Select Department</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Marketing">Marketing</option>
          <option value="Development">Development</option>
          <option value="Quality Assurance">Quality Assurance</option>
          <option value="QA engineer">QA engineer</option>
          <option value="Computers and information technology">
            Computers and information technology
          </option>
        </select>
      </div>

      <br />
      <div className="leftboxoption2">
        <h3>Location</h3>
        <br />

        <select name="location" id="location">
          <option value="">Select Location</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Pune">Pune</option>
        </select>
      </div>
    </div>
  );
};

export default JobLeftBox;

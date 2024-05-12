import React from "react";
import "./candidateleftbox.css";
const CandidataLeftBox = () => {
  return (
    
      <div className="leftmain">
        <div className="leftboxbutton">
          <button type="button">Add New Candidate</button>
        </div>
        <div className="jobcheckbox">
          <form action="">
            <input type="checkbox" id="alljobs" name="Jobs" value="" />
            New
            <br />
            <br />
            <input type="checkbox" id="activejobs" name="Jobs" value="" />
            In-Review
            <br />
            <br />
            <input type="checkbox" id="pendingjobs" name="Jobs" value="" />
            Interviewed
            <br />
            <br />
            <input type="checkbox" id="closedjobs" name="Jobs" value="" />
            Offered
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
          <h3>Experience</h3>
          <br />

          <select name="experience" id="experience">
            <option value="">Select Experience</option>
            <option value="Mumbai">Fresher</option>
            <option value="Delhi">0-1 years</option>
            <option value="Chennai">1-5 years</option>
            <option value="Bangalore">5-10 years</option>
            <option value="Hyderabad">10+ years</option>
          </select>
        </div>

        <div className="leftboxoption2">
          <h3>Skills</h3>
          <br />

          <select name="location" id="location">
            <option value="">Select Skills</option>
            <option value="Mumbai">Testing</option>
            <option value="Delhi">AI/ML</option>
            <option value="Chennai">UI/UX designing</option>
            <option value="Bangalore">Full stack</option>
            <option value="Hyderabad">Data Analytics</option>
          </select>
        </div>

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

export default CandidataLeftBox;

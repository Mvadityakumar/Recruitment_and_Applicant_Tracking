import React from "react";
import "./clientlefttable.css";
const ClientLeftTable = () => {
  return (
    <div>
      <div className="leftmain">
        <div className="leftboxbutton">
          <button type="button">Add New Client</button>
        </div>
        <div className="jobcheckbox">
          <form action="">
            <input type="checkbox" id="alljobs" name="Jobs" value="" />
            Active
            <br />
            <br />
            <input type="checkbox" id="activejobs" name="Jobs" value="" />
            On Hold
            <br />
            <br />
            <input type="checkbox" id="pendingjobs" name="Jobs" value="" />
            Inactive
            <br />
            <br />
            
          </form>
        </div>
        <div className="leftboxoption1">
          <h3>Industry</h3>
          <br />
          <select name="department" id="department">
            <option value="">Select Industry</option>
            <option value="Human Resources">Healthcare</option>
            <option value="Marketing">Information technology</option>
            <option value="Development">Construction</option>
            <option value="Quality Assurance">Sales</option>
            <option value="QA engineer">Accountant</option>
            <option value="Computers and information technology">
              Engineering
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

        <br />

        <div className="leftboxoption2">
          <h3>Client Type</h3>
          <br />

          <select name="experience" id="experience">
            <option value="">Select Type</option>
            <option value="Mumbai">Uncertain Clients</option>
            <option value="Delhi">Urgent Client</option>
            <option value="Chennai">Unresponsive Client</option>
            <option value="Bangalore">Unrealistic Client</option>
            
          </select>
        </div>

        <div className="leftboxoption2">
          <h3>Client Size</h3>
          <br />

          <select name="location" id="location">
            <option value="">Select</option>
            <option value="Mumbai">1</option>
            <option value="Delhi">2</option>
            
          </select>
        </div>

        <br/>

        
      </div>
    </div>
  );
};

export default ClientLeftTable;

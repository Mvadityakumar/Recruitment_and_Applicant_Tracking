import React from "react";
import "../styles/candidates.css";
import CandidataLeftBox from "../components/tables/CandidataLeftBox";
import CandidateTable from "../components/tables/CandidateTable";

const Candidates = () => {
  return (
    <div>
      <div className="candidatetableinputs">

        <input type="text" placeholder="Search by name or skill" >
        </input>
        
        <select name="location" id="location">
          <option value="">Select Skills</option>
          <option value="Mumbai">Testing</option>
          <option value="Delhi">AI/ML</option>
          <option value="Chennai">UI/UX designing</option>
          <option value="Bangalore">Full stack</option>
          <option value="Hyderabad">Data Analytics</option>
        </select>
        <button type="button">+ Add Candidate</button>
      </div>
      <div className="candidates">
        <CandidataLeftBox />
        <CandidateTable />
      </div>
    </div>
  );
};

export default Candidates;

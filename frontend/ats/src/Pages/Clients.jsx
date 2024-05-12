import React from "react";
import "../styles/client.css";
import ClientLeftTable from "../components/tables/ClientLeftTable";
import ClientTable from "../components/tables/ClientTable";

const Clients = () => {
  return (
    <div>
      <div className="candidatetableinputs">
        <input type="text" placeholder="Search by name or Industry"></input>

        <select name="location" id="location">
          <option value="">Select Industry</option>
          <option value="Mumbai">Healthcare</option>
          <option value="Delhi">Information technology</option>
          <option value="Chennai">Construction</option>
          <option value="Bangalore">Sales</option>
          <option value="Hyderabad">Accountant</option>
        </select>
        <button type="button">+ Add Client</button>
      </div>
      <div className="candidates">
        
        <ClientLeftTable/>
        <ClientTable/>
        
      </div>
    </div>
  );
};

export default Clients;

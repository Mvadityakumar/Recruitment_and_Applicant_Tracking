import React from "react";
import "./bars.css";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  
} from "recharts";

const data = [
  {
    name: "Jan",
    Acceptance: 1103,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mar",
    Acceptance: 2300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "May",
    Acceptance: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "July",
    Acceptance: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Sep",
    Acceptance: 1590,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Nov",
    Acceptance: 2390,
    pv: 3800,
    amt: 2500,
  },
];
const SimpleAreaa = () => {
  return (
    <div className="boxarea">
      <div className="box2">
        <h3>Status of Application</h3>
        <select name="" id="">
          <option value="By Month">By Month</option>
          <option value="By Year">By Year</option>
        </select>
      </div>

      <hr />
      
        <AreaChart
          className="boxarea1"
          width={850} 
          height={450}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Acceptance"
            stroke="#8884d8"
            fill="#643AA0"
          />
        </AreaChart>
      
    </div>
  );
};

export default SimpleAreaa;

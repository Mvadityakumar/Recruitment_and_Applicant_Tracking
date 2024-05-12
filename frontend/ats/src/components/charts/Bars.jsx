import React from "react";
import "./bars.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    Applications: 4000,
    Shortlisted: 2400,
    Rejected: 2940,
    amt: 0,
  },
  {
    name: "Mar",
    Applications: 3000,
    Shortlisted: 1398,
    Rejected: 1940,
    amt: 25,
  },
  {
    name: "May",
    Applications: 5000,
    Shortlisted: 900,
    Rejected: 2940,
    amt: 50,
  },
  {
    name: "July",
    Applications: 2780,
    Shortlisted: 9800,
    Rejected: 2940,
    amt: 75,
  },
  {
    name: "Sep",
    Applications: 5890,
    Shortlisted: 4800,
    Rejected: 2940,
    amt: 100,
  },
  {
    name: "Nov",
    Applications: 2390,
    Shortlisted: 3800,
    Rejected: 2940,
    amt: 2500,
  },
];

// export default class Example extends PureComponent {
//     static demoUrl = 'https://codesandbox.io/s/bar-chart-has-background-62zcd';

// }
const Bars = () => {
  return (
    <div  className="box11">
      <div className="box2">
        <h3>Status of Application</h3>
        <select name="" id="">
          <option value="By Month">By Month</option>
          <option value="By Year">By Year</option>
        </select>
      </div>

      <hr/>

      <BarChart  className="barsss"
        width={350  }
      
        height={350}
        
        
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar    dataKey="Shortlisted" fill="#FB9AD1" />
        <Bar     dataKey="Applications" fill="#E1D7F1" />
        <Bar  dataKey="Rejected" fill="#643AA0" />
      </BarChart>
    </div>
  );
};

export default Bars;

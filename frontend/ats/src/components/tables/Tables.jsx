

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import "./tables.css";

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("Candidate Interview - John Smith ", "10:00 AM"),
  createData("Candidate Interview - John Smith ", "10:00 AM"),
  createData("Candidate Interview - John Smith ", "10:00 AM"),
  createData("Candidate Interview - John Smith ", "10:00 AM"),
  createData("Candidate Interview - John Smith ", "10:00 AM"),
];

const Tables = () => {
  return (
    <TableContainer className="table1" >
      <Table          >
        <TableHead>
          <TableRow>
            <TableCell style={{  color:'#401E70' ,fontSize: "17px", fontWeight: "bold" }}>
              Upcoming Meetings
            </TableCell>
            <TableCell>
              <select
                style={{
                  backgroundColor: "var(--text1) ",
                  color: "white",
                  borderRadius: "5px",
                  outline:'none'
                }}
                name=""
                id=""
              >
                <option value="">Today</option>
                <option value="">Tomorrow</option>
              </select>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow    style={{height:'70px'}}    key={row.name}>
              <TableCell style={{color:'#401E70'}} component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell style={{color:'#401E70'}}>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;

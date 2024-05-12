import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./jobtable.css";

const color= "#401E70"
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "JobTitle", headerName: "Job Title", width: 150 },
  { field: "Customers", headerName: "Customers", width: 150 },
  {
    field: "Applications",
    headerName: "Applications",
    type: "number",
    width: 100,
  } ,
  {
    field: "Status",
    headerName: "Status",
    
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
    
  },
];

const rows = [
  { id: 1, Customers: "Google", JobTitle: "Software Developer", Applications: 35 , Status :'Open'    },
  { id: 2, Customers: "Google", JobTitle: "Software Developer", Applications: 42 , Status:"Open"   },
  { id: 3, Customers: "Filpkart", JobTitle: "Software Developer", Applications: 45 , Status:"Open"   },
  { id: 4, Customers: "Amazon", JobTitle: "Software Developer", Applications: 16 , Status:"Open"   },
  { id: 5, Customers: "Infosys", JobTitle: "Software Developer", Applications: 10 , Status:"Open"   },
  { id: 6, Customers: "Amazon", JobTitle: 'Software Developer', Applications: 150 , Status:"Closed"   },
  { id: 7, Customers: "Filpkart", JobTitle: "Software Developer", Applications: 44 , Status:"Open"   },
  { id: 8, Customers: "Infosys", JobTitle: "Software Developer", Applications: 36 , Status:"Open"   },
  { id: 9, Customers: "Google", JobTitle: "Software Developer", Applications: 65 , Status:"Open"   },
  { id: 10, Customers: "Tcs", JobTitle: "Software Developer", Applications: 35 , Status:"Open"   },
  { id: 11, Customers: "Filpkart", JobTitle: "Software Developer", Applications: 42 , Status:"Open"   },
  { id: 12, Customers: "Filpkart", JobTitle: "Software Developer", Applications: 45 , Status:"Open"   },
  { id: 13, Customers: "Tcs", JobTitle: "Software Developer", Applications: 16 , Status:"Open"   },
  { id: 14, Customers: "Tech mahendra", JobTitle: "Software Developer", Applications: 10 , Status:"Open"   },
  { id: 15, Customers: "Infosys", JobTitle: 'Software Developer', Applications: 150 , Status:"Open"   },
  { id: 16, Customers: "Infosys", JobTitle: "Software Developer", Applications: 44 , Status:"Open"   },
  { id: 17, Customers: "Amazon", JobTitle: "Software Developer", Applications: 36 , Status:"Open"   },
  { id: 18, Customers: "Google", JobTitle: "Software Developer", Applications: 65 , Status:"Open"   },
];

const JobTables = () => {
  return (
    <div  className="jobtable"  >
      <div>
        <h3   style={{color:"#401E70", padding:"10px", paddingLeft:'20px'}}  >Jobs</h3>
      </div>
      <div style={{ height: "555px", width: "100%"}}     >
        <DataGrid
        color={color}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10,15]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default JobTables;

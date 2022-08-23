import React from 'react'
import {tableData} from "./data";
import {Table} from "rsuite";
const PlansPricing = () => {
  const columns = [
    { field: "head", header: "#" },
    { field: "free", header: "Free" },
    { field: "startup", header: "Startup" },
    { field: "pro", header: "Pro" },
    { field: "enterprise", header: "Enterprise" },
  ];
  return(
    <>
      <div>
        <Table data={tableData} columns={columns} hover={true} striped={true} />
      </div>
    </>
  )

}
export default PlansPricing

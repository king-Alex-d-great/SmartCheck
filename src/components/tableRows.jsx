import React from "react";

let showdate = () => new Date().toDateString();

const TableRows = (props) => {
  return (
    <tr className="rectangleRowsContent">
      <td>{props.serialNumber}</td>
      <td> Application name Goes here</td>
      <td>{props.serverMapped}</td>
      <td>{showdate()}</td>
      <td>{props.status}</td>
      <td>{props.action}</td>
    </tr>
  );
};

export default TableRows;

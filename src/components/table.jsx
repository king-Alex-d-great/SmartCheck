import React from "react";
import TableRows from "./tableRows";

let headers = [
  "S/N",
  "Application",
  "Servers",
  "Last seen",
  "Status",
  "Action",
];

let showHeader = () => {
  return (
    <tr>
      {headers.map((header) => (
        <th key="header">{header}</th>
      ))}
    </tr>
  );
};

const Table = (props) => {
  return (
    <table className="table">
      <thead className="thead-light">{showHeader()}</thead>
      <tbody>
        <TableRows
          serialNumber="hgh"
          serverMapped="hbff"
          status="hfefe"
          action="gvfge"
        />
        <TableRows
          serialNumber="hgh"
          serverMapped="hbff"
          status="hfefe"
          action="gvfge"
        />
        <TableRows
          serialNumber="hgh"
          serverMapped="hbff"
          status="hfefe"
          action="gvfge"
        />

        <TableRows
          serialNumber="hgh"
          serverMapped="hbff"
          status="hfefe"
          action="gvfge"
        />
        <TableRows
          serialNumber="hgh"
          serverMapped="hbff"
          status="hfefe"
          action="gvfge"
        />
      </tbody>
    </table>
  );
};

export default Table;

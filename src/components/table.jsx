import React from "react";

let showdate = () => new Date().toDateString();

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
      
      <thead className="thead-light">{showHeader()}
      <th>something</th></thead>
      <tbody>
        <tr className="rectangleRowsContent">
          <td>{props.serialNumber}</td>
          <td> Application name Goes here</td>
          <td>{props.serverMapped}</td>
          <td>{showdate()}</td>
          <td>{props.status}</td>
          <td>{props.action}</td>
        </tr>

        <tr className="rectangleRowsContent">
          <td>{props.serialNumber}</td>
          <td> Application name Goes here</td>
          <td>{props.serverMapped}</td>
          <td>{showdate()}</td>
          <td>{props.status}</td>
          <td>{props.action}</td>
        </tr>

        <tr className="rectangleRowsContent">
          <td>{props.serialNumber}</td>
          <td> Application name Goes here</td>
          <td>{props.serverMapped}</td>
          <td>{showdate()}</td>
          <td>{props.status}</td>
          <td>{props.action}</td>
        </tr>

        <tr className="rectangleRowsContent">
          <td>{props.serialNumber}</td>
          <td> Application name Goes here</td>
          <td>{props.serverMapped}</td>
          <td>{showdate()}</td>
          <td>{props.status}</td>
          <td>{props.action}</td>
        </tr>

        <tr className="rectangleRowsContent">
          <td>{props.serialNumber}</td>
          <td> Application name Goes here</td>
          <td>{props.serverMapped}</td>
          <td>{showdate()}</td>
          <td>{props.status}</td>
          <td>{props.action}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

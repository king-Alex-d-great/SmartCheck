import React from "react";
import TableRows from "./tableRows";
import {FaCheckCircle} from "react-icons/fa";
import triangle from "../assets/triangle.svg";


let headers = [
  "S/N",
  "APPLICATION",
  "SERVERS",
  "LAST SEEN",
  "STATUS",
  "ACTION",
];

let showHeader = () => {
  return (
    <tr className="tableHeader">
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
          serialNumber="1"
          serverMapped="3 servers"
          status=  {<FaCheckCircle id="status" />} 
          text="Healthy"
    
        />
        <TableRows
          serialNumber="2"
          serverMapped="2 servers"
          status= {<img src={triangle} alt="triangle icons" />}
         
        />
        <TableRows
          serialNumber="3"
          serverMapped="2 servers"
          status=  {<FaCheckCircle id="status" />} 
          
        />

        <TableRows
          serialNumber="4"
          serverMapped="3 servers"
           status=  {<FaCheckCircle id="status" />} 
          
        />
        <TableRows
          serialNumber="5"
          serverMapped="3 servers"
           status=  {<FaCheckCircle id="status" />} 
          color="red"
          
        />
      </tbody>
    </table>
  );
};

export default Table;

import React from "react";
import { FaOrcid } from "react-icons/fa";

let showdate = () => new Date().toDateString();

const TableRows = (props) => {
  return (
    <tr className="rectangleRowsContent">
      <td><p className="rowTwoText">{props.serialNumber}<div style={{backgroundColor : props.color }} id="colorball"></div></p></td>
      <td style={{color:"#499dff"}} ><p>Application name Goes here</p></td>
      <td>{props.serverMapped}</td>
      <td>{showdate()}</td>
      <td>{props.status}    {props.text}</td>
      <td><div id="action"><button id="tablebtnhome">View result</button><FaOrcid style={{alignSelf: "center"}} /></div></td>
    </tr>
  );
};

export default TableRows;

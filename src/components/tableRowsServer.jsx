import React from "react";
import { FaOrcid } from "react-icons/fa";

const TableRowsServer = (props) => {
  return (
    <tr className="rectangleRowsContent">
      <td><p className="rowTwoText">{props.serialNumber}<div id="colorball" style={{backgroundColor : props.color }}></div></p></td>
      <td style={{color:"#499dff"}} > <p>Server name Goes here</p> </td>
      <td>IP Address</td>
      <td>85.6</td>
      <td>73.9</td>
      <td>{props.storage}</td>
      <td><div id="action"><button className="tablebtn">Edit</button><FaOrcid style={{alignSelf: "center"}} /></div></td>
    </tr>
  );
};

export default TableRowsServer;
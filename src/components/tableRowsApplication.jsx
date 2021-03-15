import React from "react";
import { FaOrcid } from "react-icons/fa";

const TableRowsApp = (props) => {
  return (
    <tr className="rectangleRowsContent">
      <td><p className="rowTwoText">{props.serialNumber}<div id="colorball" style={{backgroundColor : props.color }}></div></p></td>
      <td style={{color:"#499dff"}} > <p>Application name Goes here</p> </td>
      <td>Application type</td>
      <td>Application type</td>
      <td>Application port</td>
      <td>End point</td>
      <td>10.1.101.53</td>
      <td><div id="action"><button className="tablebtn">Action</button><FaOrcid style={{alignSelf: "center"}} /></div></td>
    </tr>
  );
};

export default TableRowsApp;
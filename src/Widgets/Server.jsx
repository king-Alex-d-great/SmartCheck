
import React, { Component } from 'react';
import Navbar from "../components/navBar";
import DropDownMenu from "../components/dropDownList";
import { FiSearch } from "react-icons/fi";
import picture from "../assets/xls.svg";
import picture2 from "../assets/PDF.svg";
import TableRowsServer from '../components/tableRowsServer';

let headers = [
  "S/N",
  "SERVER NAME",
  "IP ADDRESS",
  "CPU (%)",
  "MEMORY (%)",
  "STORAGE (%)",
  "Action",
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

class Server extends Component {
    state = {  }
    render() { 
      let showModal = () => {

}
        return (
            <React.Fragment>
        <Navbar />
        <main>
          <section id="bigRectangle">
        <div id="inputs">
          <div className="form-group has-search">
            <FiSearch className="fa fa-search form-control-feedback" />
            <input
              class="col-lg-10 homeInputField"
              type="text"
              className="form-control"
              placeholder="Enter Your Search Keywords"
            />
          </div>
          <DropDownMenu
            name="Active Status"
            option1="Active"
            option2="Inactive"
          />
          
        </div>
<button onClick={showModal} className="createServerButton"> Create a server </button>
        <div>
          <div className="entryRow Alt">
            <div>
              <img src={picture2} alt="icons" />
            </div>
            <div>
              <img src={picture} alt="icons" />
            </div>

            <p id="textAboveTable"> Showing 10 of 5000 entries </p>
          </div>
        </div>

         <table className="table">
      <thead className="thead-light">{showHeader()}</thead>
      <tbody>
        <TableRowsServer
          serialNumber="1"
          storage="50"
         
    
        />
        <TableRowsServer
          serialNumber="2"
          storage="60"
         
        />
        <TableRowsServer
          serialNumber="3"
          storage="40"
           
        />

        <TableRowsServer
          serialNumber="4"
          storage="50"
           
        />
        <TableRowsServer
          serialNumber="5"
          storage="50"
          color= "red"
           
        />
      </tbody>
    </table>


        <div id="bottomNavigation">
          <p>previous</p>
          <p id="bottomCircleNumber">1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>...</p>
          <p>5230</p>
        </div>
      </section>

        </main>
      </React.Fragment>
          );
    }
}
 
export default Server;
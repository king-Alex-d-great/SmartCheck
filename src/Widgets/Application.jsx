import React, { Component } from "react";
import Navbar from "../components/navBar";
import DropDownMenu from "../components/dropDownList";
import { FiSearch } from "react-icons/fi";
import picture from "../assets/xls.svg";
import picture2 from "../assets/PDF.svg";
import TableRowsApp from "../components/tableRowsApplication";


let headers = [
  "S/N",
  "APPLICATION NAME",
  "APPLICATION TYPE",
  "APPLICATION DCSC",
  "APPLICATION PORT",
  "ENDPOINT",
  "HOST/SERVER",
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


class ApplicationPage extends Component {
  state = {};

  
  render() {
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
<button className="createServerButton"> Add Application </button>
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
        <TableRowsApp
          serialNumber="1"
         
        />
        <TableRowsApp
          serialNumber="2"
        />
        <TableRowsApp
          serialNumber="3"
        />

        <TableRowsApp
          serialNumber="4"
        />
        <TableRowsApp
          serialNumber="5"
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

export default ApplicationPage;

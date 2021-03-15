import React, { Component } from "react";
import Table from "./table";
import DropDownMenu from "./dropDownList";
import { FiSearch } from "react-icons/fi";
import picture from "../assets/xls.svg";
import picture2 from "../assets/PDF.svg";

class MainSection extends Component {
  state = {};
  render() {
    return (
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
            name="All Application"
            option1="Application 1"
            option2="Application 2"
          />
          <DropDownMenu
            name="All Server"
            option1="Server 1"
            option2="Server 2"
          />
          <DropDownMenu
            name="All check status"
            option1="Healthy"
            option2="Critical"
          />
        </div>

        <div>
          <div className="entryRow">
            <div>
              <img src={picture2} alt="icons" />
            </div>
            <div>
              <img src={picture} alt="icons" />
            </div>

            <p id="textAboveTable"> Showing 10 of 5000 entries </p>
          </div>
        </div>

        <Table />

        <div id="bottomNavigation">
          <p>previous</p>
          <p id="bottomCircleNumber">1</p>
          <p>2</p>
          <p>3</p>
          <p>4......5230</p>
        </div>
      </section>
    );
  }
}

export default MainSection;

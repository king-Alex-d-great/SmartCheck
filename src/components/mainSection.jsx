import React, { Component } from "react";
import Table from "./table";
import DropDownMenu from "./dropDownList";

class MainSection extends Component {
  state = {};
  render() {
    return (
      <section id="bigRectangle">
        <div id="inputs">
          <input class="col-lg-2 pathBoxMain" type="text" />
          <DropDownMenu />
          <DropDownMenu />
          <DropDownMenu />
        </div>
        <div id="entryRow">
          <i></i>
          <i></i>
          <p>Showing 10 of 5000 entries</p>
        </div>
        <Table />

        <div id="bottomNavigation">
          <p>previous</p>
          <p className="bottomCircleNumber">1</p>
          <p>2</p>
          <p>3</p>
          <p>4......5230</p>
        </div>
      </section>
    );
  }
}

export default MainSection;

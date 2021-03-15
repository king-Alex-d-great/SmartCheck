import React, { Component } from "react";
import Checkbox from "./checkbox";

class Checkboxes extends Component {
  state = {};
  render() {
    return (
      <section className="form-group-row Container">
        <label for="Servername" className="col-sm-2 col-form-label">
          Application
        </label>
        <div className="col-sm-10 maincheckboxcontainer">
          <input type="checkbox" name="maincheckbox1" className="tick" />
          <label for="maincheckbox">checkbox1</label>

          <div>
            <p>some text here</p>
            <div id="checkboxes">
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Checkboxes;

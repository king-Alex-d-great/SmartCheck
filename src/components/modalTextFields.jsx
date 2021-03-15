import React, { Component } from "react";

class ModalTextField extends Component {
  state = {};
  render() {
    return (
      <section className="form-group-row Container">
        <label for="Servername" className="col-sm-2 col-form-label">
          Server Name
        </label>
        <div className="col-sm-10 ">
          <input type="text" name="Servername" className="textField" />
        </div>
      </section>
    );
  }
}

export default ModalTextField;

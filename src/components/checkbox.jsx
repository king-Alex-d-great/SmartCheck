import React, { Component } from "react";

class Checkbox extends Component {
  state = {};
  render() {
    return (
      <fieldset className="checkbox">
        <input type="checkbox" name="checkbox2" className="tick" />
        <label for="checkbox2">checkbox2</label>
      </fieldset>
    );
  }
}

export default Checkbox;

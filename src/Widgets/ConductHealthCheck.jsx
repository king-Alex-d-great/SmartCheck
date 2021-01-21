import React, { Component } from "react";
import Checkboxes from "../components/checkboxes";

class ConductHealthCheck extends Component {
  state = {};
  render() {
    return (
      <section>
        <Checkboxes />
        <Checkboxes />
      </section>
    );
  }
}

export default ConductHealthCheck;

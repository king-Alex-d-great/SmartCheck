import React, { Component } from "react";
import Checkboxes from "../components/checkboxes";
import ModalTextField from "../components/modalTextFields";

class DefineApplication extends Component {
  state = {};
  render() {
    return (
      <main className="serverSection">
        <header>
          <h4>DEFINE APPLICATION</h4>
        </header>
        <section>
          <p>Enter your server details</p>
          <form>
            <ModalTextField />
            <ModalTextField />
            <ModalTextField />
            <ModalTextField />
            <Checkboxes />
          </form>
        </section>
        <div>
          <button style={{ marginRight: "10px" }}>Cancel</button>
          <button>Create</button>
        </div>
      </main>
    );
  }
}

export default DefineApplication;

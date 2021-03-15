import React, { Component } from "react";
import Checkboxes from "../components/checkboxes";

class ConductHealthCheck extends Component {
  state = {};
  render() {
    return (
      <main className="serverSection">
      <header>
        <h1>Conduct Health Check</h1>
      </header>
      <section>
        <form>
          <Checkboxes />
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

export default ConductHealthCheck;

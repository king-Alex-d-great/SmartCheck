import React, { Component } from "react";
import ModalTextField from "../components/modalTextFields";

class CreateServer extends Component {
  state = {};
  render() {

    return (
      <section className="serverModalContainer">
         <main className="serverSection" id="createServerModal">
        <header>
          <h1>Create a Server</h1>
        </header>
        <section>
          <p>Enter your server details</p>
          <form>
            <ModalTextField />
            <ModalTextField />
            <ModalTextField />
            <ModalTextField />
          </form>
        </section>
        <div>
          <button style={{ marginRight: "10px" }}>Cancel</button>
          <button>Create</button>
        </div>
      </main>
      </section>
     
    );
  }
}

export default CreateServer;

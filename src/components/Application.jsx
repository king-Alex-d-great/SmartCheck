import React, { Component } from "react";
import Navbar from "./navBar";
import MainSection from "./mainSection";

class ApplicationPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <MainSection />
        </main>
      </React.Fragment>
    );
  }
}

export default ApplicationPage;

import React, { Component } from "react";
import Navbar from "../components/navBar";
import MainSection from '../components/mainSection';
import SmallTopRectangle from "../components/smallTopRectangles";
import "../index.css";

class HomePage extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
             <SmallTopRectangle />

<MainSection />
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;

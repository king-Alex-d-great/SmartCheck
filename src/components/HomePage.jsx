import React, { Component } from "react";
import Navbar from "./navBar";
import MainSection from './mainSection';
import SmallTopRectangle from "./smallTopRectangles";

class HomePage extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <section id="smallrectangle">
            <div class="row">
             <SmallTopRectangle />
             <SmallTopRectangle />
             <SmallTopRectangle />
            </div>
          </section>
<MainSection />
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;

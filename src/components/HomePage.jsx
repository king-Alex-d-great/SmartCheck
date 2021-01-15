import React, { Component } from "react";
import Navbar from "./navBar";
import Table from "./table";


class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main>
          <section id="smallrectangle">
            <div class="row">
              <div class="col-lg-3 pathBoxMain" style={{backgroundColor: "white"}}>
                <h2>Content</h2>
              </div>

              <div class="col-lg-3 pathBoxMain" style={{backgroundColor: "white"}}>
                <h2>Content</h2>
              </div>

              <div class="col-lg-3 pathBoxMain" style={{backgroundColor: "white"}}>
                <h2>Content</h2>
                <div className="topRectangle">
                  <p> Application Status</p>
                  <div className="specificTopRectangle">
                    <div>
                      <span className="circleNumber">10</span> <p>all</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="bigRectangle">
            <div id="inputs">
      
                <input class="col-lg-2 pathBoxMain" type="text" />
                <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href>Link 1</a>
    <a href>Link 2</a>
    <a href>Link 3</a>
  </div>
</div>

 <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href>Link 1</a>
    <a href>Link 2</a>
    <a href>Link 3</a>
  </div>
</div>

 <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href>Link 1</a>
    <a href>Link 2</a>
    <a href>Link 3</a>
  </div>
</div>
            </div>
            <Table
              serialNumber="hgh"
              serverMapped="hbff"
              status="hfefe"
              action="gvfge"
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="bottomNavigation">
                <p>previous</p>
                <p className="bottomCircleNumber">1</p>
                <p>2</p>
                <p>3</p>
                <p>4......5230</p>
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default HomePage;

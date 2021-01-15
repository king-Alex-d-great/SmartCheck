import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="container navbar navbar-expand-sm bg-light">
        <div>
          <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href>
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>
              Server
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href>
              Application
            </a>
          </li>
          <button class="btn btn-outline-success" type="button">
            Check Status
          </button>
        </ul>
      

        </div>
        </nav>
    );
  }
}

export default Navbar;

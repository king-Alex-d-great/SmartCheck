import React, { Component } from "react";
import '../Widgets/Application';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-light">
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to='./'>Home</Link>
                
             
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='./Server'>Server</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='./Application'>Application</Link>
            </li>
            <button id="btn">Check Status</button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import '../Widgets/Application';
import {Link} from 'react-router-dom';
import logo from "../assets/Smartcheck Logo White.svg";
import home from "../assets/noun_Home.svg";
import application from "../assets/noun_application.svg";
import server from "../assets/Group 42581.svg"

class Navbar extends Component {
  render() {
    return (
      <section>
        <div className="SmartcheckLogoSection">
    
          <img id="logo" src={logo} alt="logo"/>
  
         </div>
        <nav class="navbar navbar-expand-sm bg-light">
        <div className="navbarcontent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to='./'>
                <div className="navicon"> <img src={home} alt="home icon" className="navIcon"/>Home</div>
               
                </Link>
            
             
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='./Server'> <div className="navicon"><img src={server} alt="server icon" className="navIcon"/>  Server </div> </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='./Application'> <div className="navicon"> <img src={application} alt="app icon" className="navIcon"/> Application</div></Link>
            </li>
            <button id="btn">Check Status</button>
          </ul>
        </div>
      </nav>
      </section>
      
    );
  }
}

export default Navbar;

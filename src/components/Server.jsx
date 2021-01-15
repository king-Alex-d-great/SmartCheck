import React, { Component } from 'react';
import Navbar from "./navBar";
import Main from "./main";

class Server extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Navbar />
                <div className="biggerRectangle"> 
                  <smallrectangle
                     serialNumber=""
                     serversMapped=""
                     status=""
                     action=""


                  />


                </div>
            </div>
          );
    }
}
 
export default Server;
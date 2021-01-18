import React, { Component } from 'react';
import Navbar from "../components/navBar";
import MainSection from '../components/mainSection';

class Server extends Component {
    state = {  }
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
 
export default Server;
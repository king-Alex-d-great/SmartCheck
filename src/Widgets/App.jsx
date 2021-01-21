import React, { Component } from "react";
import HomePage from './HomePage';
import Server from './Server'
import CreateServer from './CreateServer';
import Application from './Application'
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
        <Switch>
        <Route path='/' component={HomePage} />
        <Route path='/Server' component={Server}/>
        <Route path='/Application' component={Application}/>
        <Route path='/CreateServer' component={CreateServer}/>
      </Switch>
      
    );
  }
}

export default App;

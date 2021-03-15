import React, { Component } from "react";import HomePage from "./HomePage";
import CreateServer from "./CreateServer";
import Server from "./Server"
import Application from "./Application";
import { Route, Switch } from "react-router-dom";
import DefineApplication from "./DefineApplication";


class App extends Component {
  render() {
    return (

      // <div>
      //   <CreateServer />
      // </div>

     
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Server" component={Server} />
        <Route exact path="/Application" component={Application} />
        <Route exact path="/CreateServer" component={CreateServer} />
        <Route exact path="/DefineApplication" component={DefineApplication} />
      </Switch>
     
    );
  }
}

export default App;

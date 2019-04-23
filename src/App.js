import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn';
import LogOut from './pages/LogOut';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/log-in" component={LogIn} />
            <Route path="/log-out" component={LogOut} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Dashboard from './pages/Dashboard';
import Poll from './pages/Poll';
import CreatePoll from './pages/CreatePoll';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import VerifyEmail from './pages/VerifyEmail';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/poll" component={Poll} />
            <Route path="/create" component={CreatePoll} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/verification" component={VerifyEmail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

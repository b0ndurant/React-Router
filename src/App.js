import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from "./Home.js";
import History from "./History";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="topnav">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/notre-histoire">Notre Histoire</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

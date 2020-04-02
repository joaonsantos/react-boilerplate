import { hot } from 'react-hot-loader/root';
import React, { Component } from "react";

import logo from "../imgs/logo.svg";
import "../style/App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        data: [],
        loaded: true
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default hot(App);

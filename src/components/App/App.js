import React, { Component } from 'react';
import logo from 'images/logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ABB Pool Table Championship</h2>
        </div>
        <p className="App-intro">
          coming soon...
        </p>
      </div>
    );
  }
}

export default App;

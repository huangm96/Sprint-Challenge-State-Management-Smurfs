import React, { Component } from "react";
import Villagers from './Villagers'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Smurfs village!</h1>
        
        <Villagers />
      </div>
    );
  }
}

export default App;

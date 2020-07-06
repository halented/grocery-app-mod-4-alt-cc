import React, { Component } from "react";
import Grocery from "./containers/Grocery";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grocery />
      </div>
    );
  }
}

export default App;

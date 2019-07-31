import React, { Component } from "react";

import InputDefault from "./Components/items/forms/inputs/input-default/input-default.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputDefault placeholder="Test" />
      </div>
    );
  }
}

export default App;

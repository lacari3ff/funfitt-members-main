import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SigninRoute from "./Components/routes/signin/signin.component";

import "./App.css";

class Signin extends Component {
  render() {
    return <SigninRoute />;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/signin" component={Signin} />
        </Router>
      </div>
    );
  }
}

export default App;

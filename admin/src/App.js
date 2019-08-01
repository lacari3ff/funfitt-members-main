import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import SigninRoute from "./Components/routes/signin/signin.component";

class Signin extends Component {
  render() {
    return <SigninRoute />;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/signin" component={Signin} />
      </Router>
    );
  }
}

export default App;

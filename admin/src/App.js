import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SigninRoute from "./Components/routes/signin/signin.component";
import ArticlesRoute from "./Components/routes/articles/articles.component";

import Nav from "./Components/items/nav/nav.component";

import "./App.css";

class Signin extends Component {
  render() {
    return <SigninRoute />;
  }
}

class Articles extends Component {
  render() {
    return <ArticlesRoute />;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Route path="/signin" component={Signin} />
          <Route path="/admin/articles" component={Articles} />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SigninRoute from "./Components/routes/signin/signin.component";
import ArticlesRoute from "./Components/routes/articles/articles.component";
import CreateArticleRoute from "./Components/routes/create-article/create-article.component";

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

class CreateArticle extends Component {
  render() {
    return <CreateArticleRoute />;
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
          <Route path="/admin/create-article" component={CreateArticle} />
        </Router>
      </div>
    );
  }
}

export default App;

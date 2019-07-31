import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Container from "./Components/items/container/container.component";

import InputDefault from "./Components/items/forms/inputs/input-default/input-default.component";
import OutlineDefault from "./Components/items/forms/outlines/outline-default/outline-default.component";
import ButtonDefault from "./Components/items/forms/buttons/button-default/button-default.component";
import LinkDefault from "./Components/items/forms/links/link-default/link-default.component";
import FormPage01 from "./Components/items/pages/form-page01/form-page01.component";
import Footer from "./Components/items/footer/footer.component";
import InformTitleDefault from "./Components/items/forms/titles/inform-title-default/inform-title-default.component";
import Nav from "./Components/items/nav/nav.component";

function Signin() {
  return (
    <div className="App">
      <FormPage01 h1="Funfitt Members" h2="Login">
        <OutlineDefault>
          <InputDefault
            placeholder="Username or email address"
            required={true}
            type="text"
          />
          <InputDefault
            placeholder="Password"
            required={true}
            type="password"
          />
          <ButtonDefault>LOG IN</ButtonDefault>
          <LinkDefault href="/restore-account">Lost your password?</LinkDefault>
        </OutlineDefault>
      </FormPage01>
    </div>
  );
}

function Signup() {
  return (
    <div className="App">
      <FormPage01 h1="Funfitt Members" h2="Register">
        <OutlineDefault>
          <InputDefault placeholder="Full name" type="text" required={true} />
          <InputDefault placeholder="Username" type="text" required={true} />
          <InputDefault
            placeholder="Email address"
            type="text"
            required={true}
          />
          <InputDefault placeholder="Birth date" type="date" required={true} />
          <InformTitleDefault>Final steps</InformTitleDefault>
          <InputDefault
            placeholder="Password"
            type="password"
            required={true}
          />
          <InputDefault
            placeholder="Repeat password"
            type="password"
            required={true}
          />
          <ButtonDefault>REGISTER</ButtonDefault>
          <LinkDefault href="/signin">Or just sign in?</LinkDefault>
        </OutlineDefault>
      </FormPage01>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      content: null
    };

    this.getContent();
  }

  getContent() {
    fetch("http://192.168.1.113:4000/render/get-full-page").then(data => {
      data.json().then(json => {
        console.log(json);
        this.setState({ content: json });
      });
    });
  }

  render() {
    return (
      <Router>
        <Router>
          <Container>
            <Nav content={this.state.content} />

            <Route path="/signup/" component={Signup} />
            <Route path="/signin/" component={Signin} />

            <Footer content={this.state.content} />
          </Container>
        </Router>
      </Router>
    );
  }
}

export default App;

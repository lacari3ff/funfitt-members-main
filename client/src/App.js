import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Container from "./Components/items/container/container.component";

import InputDefault from "./Components/items/forms/inputs/input-default/input-default.component";
import OutlineDefault from "./Components/items/forms/outlines/outline-default/outline-default.component";
import ButtonDefault from "./Components/items/forms/buttons/button-default/button-default.component";
import LinkDefault from "./Components/items/forms/links/link-default/link-default.component";
import FormPage01 from "./Components/items/pages/form-page01/form-page01.component";
import FormPage02 from "./Components/items/pages/form-page02/form-page02.component";
import Footer from "./Components/items/footer/footer.component";
import InformTitleDefault from "./Components/items/forms/titles/inform-title-default/inform-title-default.component";
import Nav from "./Components/items/nav/nav.component";
import InlinePage01 from "./Components/items/pages/inline-page01/inline-page01.component";
import InputBold from "./Components/items/forms/inputs/input-bold/input-bold.component";
import TextareaBold from "./Components/items/forms/textareas/textarea-bold/textarea-bold.component";

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

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <InlinePage01 content={this.props.content}>
          <FormPage02
            h1="Contact"
            p="Please fill out the form below and we will reply a.s.a.p."
          >
            <InputBold placeholder="Name" required={true} type="text" />
            <InputBold placeholder="Email" required={true} type="text" />
            <TextareaBold placeholder="Comments" required={true} />
            <ButtonDefault>Submit form</ButtonDefault>
          </FormPage02>
        </InlinePage01>
      </div>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <div className="App">
        <InlinePage01 content={this.props.content}>
          <FormPage02
            h1="Contact"
            p="Please fill out the form below and we will reply a.s.a.p."
          >
            <InputBold placeholder="Name" required={true} type="text" />
            <InputBold placeholder="Email" required={true} type="text" />
            <TextareaBold placeholder="Comments" required={true} />
            <ButtonDefault>Submit form</ButtonDefault>
          </FormPage02>
        </InlinePage01>
      </div>
    );
  }
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
            <Route
              path="/contact/"
              component={props => {
                return <Contact content={this.state.content} />;
              }}
            />
            <Route path="/signin/" component={Signin} />

            <Footer content={this.state.content} />
          </Container>
        </Router>
      </Router>
    );
  }
}

export default App;

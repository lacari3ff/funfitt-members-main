import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import Container from "./Components/items/container/container.component";

import InputDefault from "./Components/items/forms/inputs/input-default/input-default.component";
import OutlineDefault from "./Components/items/forms/outlines/outline-default/outline-default.component";
import ButtonDefault from "./Components/items/forms/buttons/button-default/button-default.component";
import LinkDefault from "./Components/items/forms/links/link-default/link-default.component";
import FormPage01 from "./Components/items/pages/form-page01/form-page01.component";
import Footer from "./Components/items/footer/footer.component";
import Nav from "./Components/items/nav/nav.component";

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
      <div className="App">
        <Router>
          <Container>
            <Nav content={this.state.content} />
            <FormPage01 h1="Funfitt Members" h2="Login">
              <OutlineDefault>
                <InputDefault
                  placeholder="Username or email address"
                  required={true}
                />
                <InputDefault placeholder="Password" required={true} />
                <ButtonDefault>LOG IN</ButtonDefault>
                <LinkDefault href="/restore-account">
                  Lost your password?
                </LinkDefault>
              </OutlineDefault>
            </FormPage01>
            <Footer content={this.state.content} />
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;

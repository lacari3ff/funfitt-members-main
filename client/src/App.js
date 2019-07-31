import React, { Component } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

import InputDefault from "./Components/items/forms/inputs/input-default/input-default.component";
import OutlineDefault from "./Components/items/forms/outlines/outline-default/outline-default.component";
import ButtonDefault from "./Components/items/forms/buttons/button-default/button-default.component";
import LinkDefault from "./Components/items/forms/links/link-default/link-default.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
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
        </Router>
      </div>
    );
  }
}

export default App;

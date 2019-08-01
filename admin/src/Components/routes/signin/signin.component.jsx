import React, { Component } from "react";

import InputDefault from "../../items/forms/inputs/input-default/input-default.component";
import CheckboxDefault from "../../items/forms/checkboxes/checkbox-default/checkbox-default.component";

import "./signin.styles.css";

export default class SigninRoute extends Component {
  render() {
    return (
      <div class="signin">
        <InputDefault
          placeholder="Username or Email Address"
          required={true}
          type="text"
        />
        <InputDefault placeholder="Password" required={true} type="password" />
        <CheckboxDefault placeholder="Remember me" />
      </div>
    );
  }
}

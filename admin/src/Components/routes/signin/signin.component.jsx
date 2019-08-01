import React, { Component } from "react";

import InputDefault from "../../items/forms/inputs/input-default/input-default.component";
import CheckboxDefault from "../../items/forms/checkboxes/checkbox-default/checkbox-default.component";
import ButtonDefault from "../../items/forms/buttons/button-default/button-default.component";

import FormLayout01 from "../../items/forms/layouts/form-layout01/form-layout01.component";

import "./signin.styles.css";

export default class SigninRoute extends Component {
  render() {
    return (
      <div class="signin">
        <FormLayout01 title="Admin Signin">
          <InputDefault
            placeholder="Username or Email Address"
            required={true}
            type="text"
          />
          <InputDefault
            placeholder="Password"
            required={true}
            type="password"
          />
          <CheckboxDefault placeholder="Remember me" />
          <ButtonDefault>Log In</ButtonDefault>
        </FormLayout01>
      </div>
    );
  }
}

import React, { Component } from "react";

import InputDefault from "../../items/forms/input-default/input-default.component";

export default class SigninRoute extends Component {
  render() {
    return (
      <div class="signin">
        <InputDefault
          placeholder="Username or Email Address"
          required={true}
          type="text"
        />
      </div>
    );
  }
}

import React, { Component } from "react";

import "./form-page02.styles.css";

export default class FormPage02 extends Component {
  render() {
    return (
      <div className="form-page02">
        <h1>{this.props.h1}</h1>
        <p>{this.props.p}</p>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

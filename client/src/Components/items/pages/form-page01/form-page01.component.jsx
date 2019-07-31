import React, { Component } from "react";

import "./form-page01.styles.css";

export default class FormPage01 extends Component {
  render() {
    return (
      <div className="form-page01">
        <h1>{this.props.h1}</h1>
        <h2>{this.props.h2}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

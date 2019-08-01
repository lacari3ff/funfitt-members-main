import React, { Component } from "react";

import "./form-layout01.styles.css";

export default class FormLayout01 extends Component {
  render() {
    return (
      <div className="form-layout01">
        <p>{this.props.title}</p>
        <div className="form-layout01-in">{this.props.children}</div>
      </div>
    );
  }
}

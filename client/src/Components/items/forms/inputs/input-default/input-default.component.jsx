import React, { Component } from "react";

import "./input-default.styles.css";

export default class InputDefault extends Component {
  render() {
    return (
      <div className="input-default">
        <p>{this.props.placeholder}</p>
        <input onChange={this.props.onChange} />
      </div>
    );
  }
}

import React, { Component } from "react";

import "./input-darkbg.styles.css";

export default class InputDarkbg extends Component {
  render() {
    return (
      <input
        className="input-darkbg"
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

import React, { Component } from "react";

import "./button-text.styles.css";

export default class ButtonText extends Component {
  render() {
    return (
      <button className="button-text" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

import React, { Component } from "react";

import "./button-darkbg.styles.css";

export default class ButtonDarkbg extends Component {
  render() {
    return (
      <button class="button-darkbg" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

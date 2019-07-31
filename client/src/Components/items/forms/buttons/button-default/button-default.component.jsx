import React, { Component } from "react";

import "./button-default.styles.css";

export default class ButtonDefault extends Component {
  render() {
    return (
      <button className="button-default" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

import React, { Component } from "react";

import "./button-default.styles.css";

export default class ButtonDefault extends Component {
  render() {
    return (
      <button className="button-default" onChange={this.props.onChange}>
        {this.props.children}
      </button>
    );
  }
}

import React, { Component } from "react";

import "./outline-default.styles.css";

export default class OutlineDefault extends Component {
  render() {
    return <div className="outline-default">{this.props.children}</div>;
  }
}

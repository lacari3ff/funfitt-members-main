import React, { Component } from "react";

import "./inform-title-default.styles.css";

export default class InformTitleDefault extends Component {
  render() {
    return (
      <div className="inform-title-default">
        <h1>{this.props.children}</h1>
        <hr />
      </div>
    );
  }
}

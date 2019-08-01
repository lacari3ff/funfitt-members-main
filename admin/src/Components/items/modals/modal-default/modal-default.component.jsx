import React, { Component } from "react";

import "./modal-default.styles.css";

export default class ModalDefault extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal-default">
        <div className="modal-default-inner">{this.props.children}</div>
        <div className="modal-default-bg" />
      </div>
    );
  }
}

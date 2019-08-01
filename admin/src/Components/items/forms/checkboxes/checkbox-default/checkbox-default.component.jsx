import React, { Component } from "react";

import "./checkbox-default.styles.css";

export default class CheckboxDefault extends Component {
  render() {
    return (
      <div className="checkbox-default">
        <span>
          <input type="checkbox" onChange={this.props.onChange} />
        </span>
        <span>{this.props.placeholder}</span>
      </div>
    );
  }
}

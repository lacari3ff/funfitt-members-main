import React, { Component } from "react";

import "./input-blank.styles.css";

export default class InputDefault extends Component {
  required = () => {
    if (this.props.required) {
      return <span>*</span>;
    }
  };

  render() {
    return (
      <div className="input-blank">
        <input
          placeholder={this.props.placeholder}
          type={this.props.type}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

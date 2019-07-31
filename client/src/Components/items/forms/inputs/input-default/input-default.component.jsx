import React, { Component } from "react";

import "./input-default.styles.css";

export default class InputDefault extends Component {
  required = () => {
    if (this.props.required) {
      return <span>*</span>;
    }
  };

  render() {
    return (
      <div className="input-default">
        <p>
          {this.props.placeholder}
          {this.required()}
        </p>
        <input onChange={this.props.onChange} />
      </div>
    );
  }
}

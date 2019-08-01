import React, { Component } from "react";

import "./input-bold.styles.css";

export default class InputBold extends Component {
  required = () => {
    if (this.props.required) {
      return <span>*</span>;
    }
  };

  render() {
    return (
      <div className="input-bold">
        <p>
          {this.props.placeholder}
          {this.required()}
        </p>
        <input type={this.props.type} onChange={this.props.onChange} />
      </div>
    );
  }
}

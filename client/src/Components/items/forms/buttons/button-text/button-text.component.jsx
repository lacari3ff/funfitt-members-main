import React, { Component } from "react";

export default class ButtonText extends Component {
  render() {
    return (
      <button className="button-text" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

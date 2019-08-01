import React, { Component } from "react";

import "./textarea-default.styles.css";

export default class TextareaDefault extends Component {
  required = () => {
    if (this.props.required) {
      return <span>*</span>;
    }
  };

  render() {
    return (
      <div className="textarea-default">
        <p>
          {this.props.placeholder}
          {this.required()}
        </p>
        <textarea rows="5" onChange={this.props.onChange} />
      </div>
    );
  }
}

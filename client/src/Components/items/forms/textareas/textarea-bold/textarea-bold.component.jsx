import React, { Component } from "react";

import "./textarea-bold.styles.css";

export default class TextareaBold extends Component {
  required = () => {
    if (this.props.required) {
      return <span>*</span>;
    }
  };

  render() {
    return (
      <div className="textarea-bold">
        <p>
          {this.props.placeholder}
          {this.required()}
        </p>
        <textarea rows="7" onChange={this.props.onChange} />
      </div>
    );
  }
}

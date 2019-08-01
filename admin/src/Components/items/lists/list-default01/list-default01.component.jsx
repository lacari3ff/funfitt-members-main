import React, { Component } from "react";

import "./list-default01.styles.css";

export default class ListDefault01 extends Component {
  render() {
    return (
      <div className="list-default01">
        <div className="list-default01-title">
          <span>{this.props.title}</span>
          <span>
            <button onClick={this.props.tBtnClick}>
              <img src={this.props.tBtnIcon} />
            </button>
          </span>
        </div>
        <ul className="list-default01-list">a</ul>
      </div>
    );
  }
}

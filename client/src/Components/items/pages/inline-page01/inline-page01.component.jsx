import React, { Component } from "react";

export default class InlinePage01 extends Component {
  render() {
    return (
      <div className="inline-page">
        <span>{this.props.children}</span>
        <span>
          <SideBar content={this.props.content} />
        </span>
      </div>
    );
  }
}

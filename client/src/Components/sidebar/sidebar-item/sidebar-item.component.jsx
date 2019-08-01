import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBarItem extends Component {
  render() {
    return <div className="sidebar-item">{this.props.children}</div>;
  }
}

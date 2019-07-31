import React, { Component } from "react";

import "./nav-item.styles.css";

export default class NavItem extends Component {
  render() {
    return <li class="nav-item">{this.props.children}</li>;
  }
}

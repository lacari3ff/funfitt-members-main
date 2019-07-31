import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nav-item.styles.css";

export default class NavItem extends Component {
  render() {
    return (
      <li class="nav-item">
        <Link to={this.props.href}>{this.props.children}</Link>
      </li>
    );
  }
}

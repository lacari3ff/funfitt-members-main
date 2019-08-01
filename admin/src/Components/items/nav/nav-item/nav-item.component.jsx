import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./nav-item.styles.css";

export default class Navitem extends Component {
  render() {
    return (
      <li class="nav-item">
        <Link to={this.props.href}>
          <img src={this.props.icon} />
          <p>{this.props.title}</p>
        </Link>
      </li>
    );
  }
}

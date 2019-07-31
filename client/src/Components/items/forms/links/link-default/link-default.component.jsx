import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./link-default.styles.css";

export default class LinkDefault extends Component {
  render() {
    return (
      <Link className="link-default" to={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
}

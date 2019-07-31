import React, { Component } from "react";

import NavItem from "./nav-item/nav-item.component";

export default class Nav extends Component {
  getTopNav() {
    if (this.props.content) {
      return this.props.content.nav.top.map(top => {
        return <NavItem href={top.url}>{top.title}</NavItem>;
      });
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-top">{this.getTopNav()}</div>
      </div>
    );
  }
}

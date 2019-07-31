import React, { Component } from "react";

import NavItem from "./nav-item/nav-item.component";

import "./nav.styles.css";

export default class Nav extends Component {
  getTopNav() {
    if (this.props.content) {
      return this.props.content.nav.top.map(top => {
        return <NavItem href={top.url}>{top.title}</NavItem>;
      });
    }
  }

  getBottomNav() {
    if (this.props.content) {
      return this.props.content.nav.bottom.map(top => {
        return <NavItem href={top.url}>{top.title}</NavItem>;
      });
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-top">{this.getTopNav()}</div>
        <div className="nav-banner">
          <span>
            <h1>Funfitt</h1>
            <p>Members</p>
          </span>
        </div>
        <div className="nav-bottom">{this.getBottomNav()}</div>
      </div>
    );
  }
}

import React, { Component } from "react";

import SideBarHr from "../sidebar-hr/sidebar-hr.component";
import SideBarHrThin from "../sidebar-hr-thin/sidebar-hr-thin.component";

import "./sidebar-title.styles.css";

export default class SideBarTitle extends Component {
  render() {
    return (
      <div className="sidebar-title">
        <SideBarHr />
        <p>{this.props.children}</p>
        <SideBarHrThin />
      </div>
    );
  }
}

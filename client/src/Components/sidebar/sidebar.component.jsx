import React, { Component } from "react";

import InputBlank from "../items/forms/inputs/input-blank/input-blank.components";
import SideBarItem from "./sidebar-item/sidebar-item.component";

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SideBarItem>
          <InputBlank placeholder="Search this website" />
        </SideBarItem>
      </div>
    );
  }
}

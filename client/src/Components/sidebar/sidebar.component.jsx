import React, { COmponent } from "react";

import InputDefault from "../items/forms/inputs/input-default/input-default.component";
import SideBarItem from "./sidebar-item/sidebar-item.component";

export default class SideBar extends COmponent {
  render() {
    return (
      <div className="sidebar">
        <SideBarItem>
          <InputBlank />
        </SideBarItem>
      </div>
    );
  }
}

import React, { Component } from "react";

import "./nav.styles.css";

import admins from "./admins.svg";
import articles from "./articles.svg";

import NavItem from "./nav-item/nav-item.component";

export default class Nav extends Component {
  constructor() {
    super();

    this.state = {
      nav: [
        {
          title: "Articles",
          href: "/admin/articles",
          icon: articles
        },
        {
          title: "Admins",
          href: "/admin/admins",
          icon: admins
        }
      ]
    };
  }

  render() {
    return (
      <div className="nav">
        <ul>
          {this.state.nav.map(item => {
            return (
              <NavItem title={item.title} icon={item.icon} href={item.href} />
            );
          })}
        </ul>
      </div>
    );
  }
}

import React, { Component } from "react";

import InputBlank from "../items/forms/inputs/input-blank/input-blank.components";
import SideBarItem from "./sidebar-item/sidebar-item.component";
import SideBarTitle from "./sidebar-title/sidebar-title.component";
import ArticleSmall from "../items/articles/article-small/article-small.component";

import "./sidebar.styles.css";

export default class SideBar extends Component {
  getArticle = () => {
    if (this.props.content) {
      console.log(this.props.content);
    }
  };

  render() {
    if (!this.props.content) {
      return null;
    }
    console.log(this.props.content);
    return (
      <div className="sidebar">
        <SideBarItem>
          <InputBlank placeholder="Search this website" />
        </SideBarItem>
        <SideBarItem>
          <SideBarTitle>Recent Posts</SideBarTitle>
          <ArticleSmall
            image={this.props.content.recent.img}
            title={this.props.content.recent.title}
            text={this.props.content.recent.text}
          />
        </SideBarItem>
      </div>
    );
  }
}

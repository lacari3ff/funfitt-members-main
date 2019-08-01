import React, { Component } from "react";

import InputBlank from "../items/forms/inputs/input-blank/input-blank.components";
import SideBarItem from "./sidebar-item/sidebar-item.component";
import SideBarTitle from "./sidebar-title/sidebar-title.component";
import ArticleSmall from "../items/articles/article-small/article-small.component";
import SideBarHrThin from "./sidebar-hr-thin/sidebar-hr-thin.component";
import ArticleUlList from "../items/articles/article-ul-list/article-ul-list.component";

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
            url={this.props.content.recent.url}
          />
          <SideBarHrThin />
          <ArticleUlList listItems={this.props.content.recent.other} />
        </SideBarItem>
        <SideBarItem>
          <SideBarTitle>Follow us online</SideBarTitle>
        </SideBarItem>
        <SideBarItem>
          <SideBarTitle>Advertisements</SideBarTitle>
        </SideBarItem>
      </div>
    );
  }
}

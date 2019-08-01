import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./article-ul-list.styles.css";

export default class ArticleUlList extends Component {
  render() {
    if (!this.props.listItems) {
      return null;
    }
    return (
      <ul className="article-ul-list">
        {this.props.listItems.map(item => {
          return (
            <li>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

import React, { Component } from "react";

import "./article-item.styles.css";

export default class ArticleItem extends Component {
  render() {
    return <div className="article-item">{this.props.children}</div>;
  }
}

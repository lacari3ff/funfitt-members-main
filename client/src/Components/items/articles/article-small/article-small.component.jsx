import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./article-small.styles.css";

export default class ArticleSmall extends Component {
  render() {
    return (
      <div className="article-small">
        <img src={this.props.image} />
        <h3>{this.props.title}</h3>
        <p>{this.props.text}</p>
        <Link to={this.props.src}>[Read more...]</Link>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Article01 extends Component {
  render() {
    render(
      <div className="article01">
        <div className="article01-top">
          <h1>{this.props.article.title}</h1>
          <p>
            {this.props.article.cdate} BY{" "}
            <Link to={this.props.article.author.purl}>
              {this.props.article.author.fullname}
            </Link>
            -
          </p>
        </div>
      </div>
    );
  }
}

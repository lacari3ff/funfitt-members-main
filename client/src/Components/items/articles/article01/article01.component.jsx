import React, { Component } from "react";
import { Link } from "react-router-dom";

import ButtonText from "../../forms/buttons/button-text/button-text.component";
import ArticleItem from "../article-item/article-item.component";
import InputDefault from "../../forms/inputs/input-default/input-default.component";
import TextareaDefault from "../../forms/textareas/textarea-default/textarea-default.component";
import ButtonDefault from "../../forms/buttons/button-default/button-default.component";

import "./article01.styles.css";

export default class Article01 extends Component {
  render() {
    return (
      <div className="article01">
        <ArticleItem>
          <div className="article01-top">
            <h1>{this.props.article.title}</h1>
            <p>
              {this.props.article.cdate} BY{" "}
              <Link to={this.props.article.author.purl}>
                {this.props.article.author.fullname}
              </Link>
              - <ButtonText>LEAVE A COMMENT</ButtonText>
            </p>
            <div className="article01-top-img">
              <img src={this.props.article.image} />
            </div>
          </div>
          <div className="article01-content">{this.props.article.content}</div>
        </ArticleItem>
        <ArticleItem>
          <form>
            <TextareaDefault placeholder="Comment" required={true} />
            <InputDefault placeholder="Name" required={true} />
            <ButtonDefault>Post comment</ButtonDefault>
          </form>
        </ArticleItem>
      </div>
    );
  }
}

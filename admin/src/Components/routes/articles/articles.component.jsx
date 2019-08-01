import React, { Component } from "react";

import plus from "./plus.svg";

import "./articles.styles.css";

import ListDefault01 from "../../items/lists/list-default01/list-default01.component";

export default class ArticlesRoute extends Component {
  render() {
    return (
      <div className="articles">
        <ListDefault01 title="Articles" tBtnIcon={plus} />
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./footer.styles.css";

export default class Footer extends Component {
  constructor() {
    super();

    this.state = {
      content: null
    };

    this.getFooter();
  }

  getFooter() {
    fetch("http://192.168.1.113:4000/render/get-full-page").then(footer => {
      footer.json().then(json => {
        this.setState({ content: json });
      });
    });
  }

  mapFooter() {
    if (this.state.content) {
      return this.state.content.footer.map(sub => {
        return (
          <figure key={sub.title} className="footer-fig">
            <h3>{sub.title}</h3>
            <ul>
              {sub.sub.map(url => {
                return (
                  <li>
                    <Link to={url.url}>{url.title}</Link>
                  </li>
                );
              })}
            </ul>
          </figure>
        );
      });
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-content">{this.mapFooter()}</div>
        <hr />
        <div className="footer-bottom">
          <p>
            Copyright 2019 - Template bought from <a>News Pro</a>, Build by{" "}
            <a target="_blank" href="https://lukerieff.com">
              Luke Rieff
            </a>
          </p>
        </div>
      </div>
    );
  }
}

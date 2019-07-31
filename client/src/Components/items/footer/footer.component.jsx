import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./footer.styles.css";

import ButtonDarkbg from "../forms/buttons/button-darkbg/button-darkbg.component";
import InputDarkbg from "../forms/inputs/input-darkbg/input-darkbg.components";

export default class Footer extends Component {
  mapFooter() {
    if (this.props.content) {
      return this.props.content.footer.map(sub => {
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
        <div className="footer-content">
          {this.mapFooter()}
          <figure className="footer-fig">
            <h3>NEWSLETTER</h3>
            <form>
              <InputDarkbg placeholder="Email address" />
              <ButtonDarkbg>Subscribe</ButtonDarkbg>
            </form>
          </figure>
        </div>
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

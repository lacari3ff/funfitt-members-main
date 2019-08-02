import React, { Component } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";

import ulist from "./ulist.svg";
import olist from "./olist.svg";
import underline from "./underline.svg";
import italic from "./italic.svg";
import bold from "./bold.svg";
import codeblock from "./codeblock.svg";

import "./create-article.styles.css";

// The Components

class HeaderOne extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.children}</h1>;
  }
}

const blockRendererFn = contentBlock => {
  const type = contentBlock.getType();

  if (type === "HeaderOne") {
    return {
      component: HeaderOne,
      props: {}
    };
  }
};

// The Text Editor

class EditorText extends Component {
  constructor() {
    super();

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange = editorState => {
    this.setState({ editorState: editorState });
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = styleType => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, styleType)
    );
  };

  convertToRaw = () => {
    const contentState = this.state.editorState.getCurrentContent();
    console.log(convertToRaw(contentState));
  };

  render() {
    return (
      <div className="editor-text">
        <div className="editor-text-options">
          <button onClick={() => this.toggleBlockType("header-one")}>H1</button>
          <button onClick={() => this.toggleBlockType("header-two")}>H2</button>
          <button onClick={() => this.toggleBlockType("header-three")}>
            H3
          </button>
          <button onClick={() => this.toggleBlockType("header-four")}>
            H4
          </button>
          <button onClick={() => this.toggleBlockType("header-five")}>
            H5
          </button>
          <button onClick={() => this.toggleBlockType("header-six")}>H6</button>
        </div>
        <div className="editor-text-options">
          <button onClick={() => this.toggleInlineStyle("BOLD")}>
            <img src={bold} />
          </button>
        </div>
        <strong>Editor</strong>
        <div className="editor-text-inner">
          <Editor
            onChange={this.onChange}
            editorState={this.state.editorState}
            blockRendererFn={blockRendererFn}
          />
        </div>
      </div>
    );
  }
}

export default class CreateArticleRoute extends Component {
  render() {
    return (
      <div className="create-article">
        <EditorText />
      </div>
    );
  }
}

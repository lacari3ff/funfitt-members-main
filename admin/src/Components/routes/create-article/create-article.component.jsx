import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

import "./create-article.styles.css";

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

  onToggleUnderline = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
    );
  };

  onToggleLink = () => {
    this.onChange(
      RichUtils.toggleLink(
        this.state.editorState,
        this.state.editorState.getSelection()
      )
    );
  };

  onToggleBold = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
  };

  onToggleItalic = () => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
    );
  };

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  };

  render() {
    return (
      <div className="editor-text">
        <div className="editor-text-options">
          <button onClick={this.onToggleCode}>CodeBlock</button>
          <button onClick={this.onToggleUnderline}>Underline</button>
          <button onClick={this.onToggleBold}>Bold</button>
          <button onClick={this.onToggleItalic}>Italic</button>
          <button onClick={this.onToggleLink}>Link</button>
        </div>
        <strong>Editor</strong>
        <div className="editor-text-inner">
          <Editor
            onChange={this.onChange}
            editorState={this.state.editorState}
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
        <EditorText />{" "}
      </div>
    );
  }
}

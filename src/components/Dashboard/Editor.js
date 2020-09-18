import React, { Component } from "react";
import Context from "../RegisterPage/Context";
import "./Dashboard.css";

class Editor extends Component {
  state = {
    editedText: null,
  };
  static contextType = Context;
  updateText = (e) => {
    e.preventDefault();
    const text = e.target.value;
    this.setState({ editedText: text });
  };
  sendEditedEntry = (id, newText) => {
    this.context.editText(id, newText);
    this.props.showEntries();
  };
  render() {
    const id = this.props.state.id;
    const entries = this.context.entries;
    const foundEntry = entries.filter((e) => e.id === id);
    const entry = foundEntry[0];
    return (
      <div className="ViewerBox">
        <div className="ViewerBox__Dash">
          <div className="Dash__Data">
            <span className="Dash__DateAndDuration">
              {entry.date + " " + entry.duration}
            </span>
          </div>
          <div className="Dash__Buttons">
            <button
              onClick={() => this.sendEditedEntry(id, this.state.editedText)}
            >
              save
            </button>
            <button onClick={this.props.showEntries}>exit</button>
          </div>
        </div>
        <form className="Editor__Form">
          <textarea
            className="Editor__TextArea"
            defaultValue={entry.text}
            onChange={(e) => this.updateText(e)}
          />
        </form>
      </div>
    );
  }
}

export default Editor;

import React, { Component } from "react";
import Context from "../../Context";
import "./Dashboard.css";

class Editor extends Component {
  state = {
    editedText: null,
    saved: false,
  };
  static contextType = Context;
  updateText = (e) => {
    e.preventDefault();
    const text = e.target.value;
    this.setState({ editedText: text });
  };
  sendEditedEntry = (id, newText) => {
    const entry_id = id;
    const text = newText;
    this.setState({ saved: true });
    this.context.submitEditedEntry(text, entry_id);
    setTimeout(() => this.props.showEntries(), 1000);
  };
  render() {
    const id = this.props.state ? this.props.state.id : 0;
    const entries = this.context.entries;
    const foundEntry = entries.filter((e) => e.id === id);
    const entry = foundEntry[0]
      ? foundEntry[0]
      : { date: "none", duration: "none", text: "none" };
    return (
      <>
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
        {this.state.saved && (
          <div className="Saved">
            <span>success!</span>
          </div>
        )}
      </>
    );
  }
}

export default Editor;

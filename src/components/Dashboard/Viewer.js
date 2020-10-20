import React, { Component } from "react";
import Context from "../../Context";
import "./Dashboard.css";

class Viewer extends Component {
  static contextType = Context;

  render() {
    const id = this.props.state.id;
    const entries = this.context.entries;
    const foundEntry = entries.filter((e) => e.id === id);
    const entry = foundEntry[0]
      ? foundEntry[0]
      : { date: "none", duration: "none", text: "none", id: "none" };
    return (
      <div className="ViewerBox">
        <div className="ViewerBox__Dash">
          <div className="Dash__Data">
            <span className="Dash__DateAndDuration">
              {entry.date + " " + entry.duration}
            </span>
          </div>
          <div className="Dash__Buttons">
            <button onClick={() => this.props.showEditor(id)}>edit</button>
            <button onClick={() => this.props.showDeleteWarning(id)}>
              delete
            </button>
            <button onClick={this.props.showEntries}>exit</button>
          </div>
        </div>
        <div className="ViewerBox__Text">
          <span>{entry.text}</span>
        </div>
      </div>
    );
  }
}

export default Viewer;

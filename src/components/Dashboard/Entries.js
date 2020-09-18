import React, { Component } from "react";
import ListItem from "./ListItem";
import Context from "../RegisterPage/Context";
import "./Dashboard.css";

class Entries extends Component {
  static contextType = Context;
  render() {
    return (
      <div className="EntriesBox">
        <h3>Journal Entries</h3>
        {this.context.entries.filter(
          (entry) => entry.user_id == this.context.user.user_id
        ).length > 0 ? (
          <div className="EntriesBox__ListBox">
            <ul>
              {this.context.entries
                .filter((entry) => entry.user_id == this.context.user.user_id)
                .map((entry) => (
                  <ListItem
                    key={entry.id}
                    entry={entry}
                    showViewer={this.props.showViewer}
                    showEditor={this.props.showEditor}
                    showDeleteWarning={this.props.showDeleteWarning}
                  />
                ))}
            </ul>
          </div>
        ) : (
          <div className="NoEntriesBox">
            <span>No entries to show.</span>
          </div>
        )}
      </div>
    );
  }
}

export default Entries;

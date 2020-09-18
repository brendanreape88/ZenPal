import React, { Component } from "react";
import Context from "../RegisterPage/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Dashboard.css";

class ListItem extends Component {
  static contextType = Context;

  render() {
    const { entry } = this.props;
    return (
      <div className="ListItem">
        <div className="ListItem__Icon">
          <FontAwesomeIcon icon="pen" />
        </div>
        <div className="ListItem__Data">
          <span>{entry.date + " " + entry.duration + " " + entry.text}</span>
        </div>
        <button
          onClick={() => this.props.showViewer(entry.id)}
          className="ListItem__View"
        >
          View
        </button>
        <button
          onClick={() => this.props.showEditor(entry.id)}
          className="ListItem__Edit"
        >
          Edit
        </button>
        <button
          onClick={() => this.props.showDeleteWarning(entry.id)}
          className="ListItem__Delete"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default ListItem;

import React, { Component } from "react";
import Context from "../../Context";
import Display from "./Display";
import Entries from "./Entries";
import Viewer from "./Viewer";
import Editor from "./Editor";
import "./Dashboard.css";

class Dashboard extends Component {
  static contextType = Context;
  state = {
    entries: true,
    viewer: false,
    editor: false,
    id: null,
    showDeleteWarning: false,
  };

  showEntries = () => {
    this.setState({
      entries: true,
      viewer: false,
      editor: false,
      id: null,
    });
  };

  showViewer = (id) => {
    this.setState({
      entries: false,
      viewer: true,
      editor: false,
      id: id,
    });
  };

  showEditor = (id) => {
    this.setState({
      entries: false,
      viewer: false,
      editor: true,
      id: id,
    });
  };

  showDeleteWarning = (id) => {
    this.setState({
      id: id,
      showDeleteWarning: true,
    });
  };

  hideDeleteWarning = () => {
    this.setState({
      showDeleteWarning: false,
    });
  };

  deleteEntry = () => {
    this.setState({
      entries: true,
      viewer: false,
      editor: false,
      id: null,
      showDeleteWarning: false,
    });
    const id = this.state.id;
    this.context.deleteEntry(id);
  };

  render() {
    return (
      <main className="Dashboard__Main">
        <Display />
        {this.state.entries && (
          <Entries
            showViewer={this.showViewer}
            showEditor={this.showEditor}
            showDeleteWarning={this.showDeleteWarning}
          />
        )}
        {this.state.viewer && (
          <Viewer
            state={this.state}
            showEntries={this.showEntries}
            showEditor={this.showEditor}
            showDeleteWarning={this.showDeleteWarning}
          />
        )}
        {this.state.editor && (
          <Editor
            state={this.state}
            showEntries={this.showEntries}
            showViewer={this.showViewer}
          />
        )}
        {this.state.showDeleteWarning && (
          <div className="DeleteBox">
            <span>Are you sure you want to delete this entry?</span>
            <button onClick={this.deleteEntry} className="DeleteBox__Yes">
              yes
            </button>
            <button onClick={this.hideDeleteWarning} className="DeleteBox__No">
              no
            </button>
          </div>
        )}
      </main>
    );
  }
}

export default Dashboard;

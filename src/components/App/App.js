import React from "react";
import { Route, Switch } from "react-router-dom";
import "../FontawesomeIcons/index";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import Register from "../RegisterPage/RegisterPage";
import Dashboard from "../Dashboard/Dashboard";
import Meditate from "../Meditate/Meditate";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Context from "../../Context";
import EntriesApiService from "../../services/entries-api-service";
import TokenService from "../../services/token-service";
import config from "../../config";

class App extends React.Component {
  state = {
    loggedIn: false,
    entries: [],
    entryId: null,
    error: null,

    logIn: () => {
      this.setState({ loggedIn: true });
    },

    logOut: () => {
      this.setState({ loggedIn: false, entries: [] });
      TokenService.clearAuthToken();
      window.localStorage.removeItem(config.USER_KEY);
      window.localStorage.removeItem(config.USER_NAME);
    },

    updateEntries: (entries) => {
      const sortedEntries = entries.sort((a, b) => b.id - a.id);
      this.setState({ entries: sortedEntries });
      console.log(
        "THESE ARE THE ENTRIES IN STATE FOR THE USER",
        this.state.entries
      );
    },

    submitTime: (timer) => {
      const duration = timer / 60;
      let now = new Date();
      let shortDate = now.toLocaleDateString();
      const user_id = localStorage.getItem(config.USER_ID);
      const date = shortDate;
      const text = "No journal entry recorded.";
      EntriesApiService.postEntry(date, duration, text, user_id).then((res) => {
        this.setState({ entryId: res[0].id });
      });
    },

    submitNewEntry: (text) => {
      const entry_id = this.state.entryId;
      EntriesApiService.updateTextForEntry(text, entry_id);
    },

    deleteEntry: (entry_id) => {
      // const newEntriesList = this.state.entries.filter((f) => f.id !== id);
      // this.setState({ entries: newEntriesList });
      EntriesApiService.deleteEntry(entry_id).then((res) => {
        const user_id = localStorage.getItem(config.USER_ID);
        EntriesApiService.getEntriesForUser(user_id).then((entries) => {
          this.state.updateEntries(entries);
        });
      });
    },

    editText: (id, newText) => {
      const foundEntry = this.state.entries.find((f) => f.id === id);
      const editedEntry = {
        user_id: foundEntry.user_id,
        id: foundEntry.id,
        date: foundEntry.date,
        duration: foundEntry.duration,
        text: newText,
      };
      const removeOldEntryArray = this.state.entries.filter((f) => f.id !== id);
      const newEntriesArray = removeOldEntryArray.concat(editedEntry);
      const sortedArray = newEntriesArray.sort((a, b) => b.id - a.id);
      this.setState({ entries: sortedArray });
    },
  };

  componentDidMount() {}

  render() {
    const alert = this.props.alert;
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <header className="App__Header">
            <Header />
          </header>
          <main className="App__Main">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/meditate" component={Meditate} />
              <Route path="/register" component={Register} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Context.Provider>
    );
  }
}

export default App;

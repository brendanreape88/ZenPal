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
    },

    //When the user begins their meditation timer, immediately a new entry is saved in the database.
    //This entry has a filler text which is replaced with a PUT request when the user fills out their
    //journal entry and submits it to the database.
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
      EntriesApiService.deleteEntry(entry_id).then(() => {
        const user_id = localStorage.getItem(config.USER_ID);
        EntriesApiService.getEntriesForUser(user_id).then((entries) => {
          this.state.updateEntries(entries);
        });
      });
    },
  };

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

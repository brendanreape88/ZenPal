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

class App extends React.Component {
  state = {
    loggedIn: false,
    users: [],
    entries: [],

    registerNewUser: (desiredUsername, desiredPassword) => {
      const newUser = {
        user_id: this.state.users.length + 1,
        user_name: desiredUsername,
        user_password: desiredPassword,
      };
      this.setState({ users: [...this.state.users, newUser] });
      this.setState({ user: newUser });
    },

    logIn: () => {
      this.setState({ loggedIn: true });
    },

    logOut: () => {
      this.setState({ loggedIn: false });
    },

    submitTime: (timer) => {
      const duration = timer / 60;
      const topEntryId = this.state.entries[0].id
        ? this.state.entries[0].id
        : 0;
      let now = new Date();
      let shortDate = now.toLocaleDateString();
      const newEntry = {
        user_id: this.state.user.id,
        id: topEntryId + 1,
        date: shortDate,
        duration: duration,
        text: "No journal entry recorded.",
      };
      this.setState({
        entries: [newEntry, ...this.state.entries],
      });
    },

    submitNewEntry: (entry) => {
      const newEntry = {
        user_id: this.state.user.user_id,
        id: this.state.entries[0].id,
        date: this.state.entries[0].date,
        duration: this.state.entries[0].duration,
        text: entry,
      };
      const entriesCopy = this.state.entries;
      entriesCopy.shift();
      this.setState({ entries: [newEntry, ...entriesCopy] });
    },

    deleteEntry: (id) => {
      const newEntriesList = this.state.entries.filter((f) => f.id !== id);
      this.setState({ entries: newEntriesList });
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

  componentDidMount() {
    if (this.state.loggedIn) {
    }
  }

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

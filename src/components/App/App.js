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
import Context from "../RegisterPage/Context";

class App extends React.Component {
  state = {
    user: null,
    users: [
      {
        user_id: 1,
        user_name: "ZenPalDemo",
        user_password: "ZenPalDemo1!",
      },
    ],
    entries: [
      {
        user_id: 1,
        id: 3,
        date: "1/3/20",
        duration: "30 mins.",
        text:
          "Man, I really needed this today. I feel so relaxed and at one with myself and the universe. I really couldn't ask for more than this!",
      },
      {
        user_id: 1,
        id: 2,
        date: "1/2/20",
        duration: "30 mins.",
        text:
          "Was feeling really stressed before I sat down to meditate this morning. I think doing that coffee detox is really getting to me.",
      },
      {
        user_id: 1,
        id: 1,
        date: "1/1/20",
        duration: "30 mins.",
        text:
          "Had a really nice meditation this morning. It was really, really good. Like, I couldn't believe it.",
      },
    ],

    registerNewUser: (desiredUsername, desiredPassword) => {
      const newUser = {
        user_id: this.state.users.length + 1,
        user_name: desiredUsername,
        user_password: desiredPassword,
      };
      this.setState({ users: [...this.state.users, newUser] });
      this.setState({ user: newUser });
    },

    logIn: (foundUser) => {
      localStorage.setItem("zenpal-user", foundUser);
      this.setState({ user: foundUser[0] });
    },

    logOut: () => {
      this.setState({ user: null });
      localStorage.removeItem("zenpal-user");
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

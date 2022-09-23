import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Contacts from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";
import UsersList from "./containers/Users/UsersList";
import EventsList from "./containers/Evenements/EventsList";
import SponsorsList from "./containers/Sponsors/SponsorsList";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/users" component={UsersList} />
            <Route path="/events" component={EventsList} />
            <Route path="/sponsors" component={SponsorsList} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./containers/About/About";
import Contacts from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contacts/>} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;

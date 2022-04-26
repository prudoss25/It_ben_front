import React, { Component } from "react";
import Aux from "../_Aux/_Aux";
import classes from "./Layout.css";
import Footer from "../../components/Footer/Footer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";

class Layout extends Component {
  state = {
    openSidebar: false,
  };

  handleToggleSidebar = () => {
    this.setState((prevState) => {
      return { openSidebar: !prevState.openSidebar };
    });
  };

  render() {
    const content = this.state.openSidebar
      ? [classes.Content, classes.Shrunken]
      : [classes.Content, classes.Extended];
    return (
      <Aux>
        {/* HEADER */}
        <Toolbar
          toggleSidebar={this.handleToggleSidebar}
          openSidebar={this.state.openSidebar}
        />
        <div className={classes.Body}>
          {/* SIDEBAR */}
          <Sidebar open={this.state.openSidebar} />
          {/* CONTENT */}
          <main className={content.join(" ")}>{this.props.children}</main>
        </div>
        {/* FOOTER */}
        <Footer />
      </Aux>
    );
  }
}

export default Layout;

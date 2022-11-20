import React from "react";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import {StyleRoot} from "radium";

const layout = (props) => {
  const sidebarDrawer = useSelector((state) => state.sidebarDrawer.value)


  const content = sidebarDrawer
      ? [classes.Content, classes.Shrunken]
      : [classes.Content, classes.Extended];
    
    return (
      <StyleRoot>
        {/* HEADER */}
        <Toolbar
        />
        <div className={classes.Body}>
          {/* SIDEBAR */}
          <Sidebar />
          {/* CONTENT */}
          <main className={content.join(" ")}>{props.children}</main>
        </div>
        {/* FOOTER */}
        {/* <Footer /> */}
      </StyleRoot>
    );
  
}

export default layout;

import React from "react";
import Aux from "../_Aux/_Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import { useSelector } from "react-redux";

const layout = (props) => {
  const sidebarDrawer = useSelector((state) => state.sidebarDrawer.value)


  const content = sidebarDrawer
      ? [classes.Content, classes.Shrunken]
      : [classes.Content, classes.Extended];
    
    return (
      <Aux>
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
      </Aux>
    );
  
}

export default layout;

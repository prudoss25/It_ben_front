import React from "react";
import { useState } from "react";
import Aux from "../_Aux/_Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";

const layout = (props) => {

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar)

  };
  const content = openSidebar
      ? [classes.Content, classes.Shrunken]
      : [classes.Content, classes.Extended];
    
    return (
      <Aux>
        {/* HEADER */}
        <Toolbar
          toggleSidebar={handleToggleSidebar}
          openSidebar={openSidebar}
        />
        <div className={classes.Body}>
          {/* SIDEBAR */}
          <Sidebar open={openSidebar} />
          {/* CONTENT */}
          <main className={content.join(" ")}>{props.children}</main>
        </div>
        {/* FOOTER */}
        {/* <Footer /> */}
      </Aux>
    );
  
}

export default layout;

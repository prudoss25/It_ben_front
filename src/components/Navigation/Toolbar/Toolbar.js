import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../Sidebar/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import Search from "../Search/Search";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>
        <span className={classes.Menu}>
          <DrawerToggle
            clicked={props.toggleSidebar}
            open={props.openSidebar}
          />
        </span>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <div>
        <Search/>
      </div>
      <div>
        <div>NOTIFICATIONS</div>
        <div>PROFIL</div>
      </div>
    </header>
  );
};

export default toolbar;

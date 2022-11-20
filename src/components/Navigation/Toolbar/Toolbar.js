import React, { useEffect, useState } from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../Sidebar/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import AuthenticationNavs from "./AuthenticationNavs/AuthenticationNavs";
import {StyleRoot} from "radium";

const toolbar = () => {
  const token = useSelector((state) => state.auth.token)
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(()=> {
    setAuthenticated(token == null ? false : true )
  },[token])
  return (
    <StyleRoot>
      <header className={classes.Toolbar}>
        <div>
          <span className={classes.Menu}>
            <DrawerToggle
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
          <Search />
        </div>
        <AuthenticationNavs authenticated={authenticated} />
        
      </header>
    </StyleRoot>
  );
};

export default toolbar;

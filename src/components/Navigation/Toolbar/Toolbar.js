import React, { useEffect, useState } from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../Sidebar/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";
import Profil from "../Profil/Profil";
import { useSelector } from "react-redux";

const toolbar = (props) => {
  const token = useSelector((state) => state.auth.token)
  const [authenticated, setAuthenticated] = useState(false);
  console.log('test token',token)
  useEffect(()=> {
    setAuthenticated(token == null ? false : true )
  },[token])
  return (
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
      {
        authenticated &&(
          <div>
            <div>
              <Notification />
            </div>
            <div>
              <Profil />
            </div>
          </div>
        )
      }
      
    </header>
  );
};

export default toolbar;

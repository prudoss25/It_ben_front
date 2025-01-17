import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";
import { useLocation } from "react-router-dom";
const navigationItems = () => {
  let location = useLocation();
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active={location.pathname === "/"}>
        Accueil
      </NavigationItem>
      <NavigationItem link="/about" active={location.pathname === "/about"}>
        A propos
      </NavigationItem>
      <NavigationItem
        link="/contacts"
        active={location.pathname === "/contacts"}
      >
        Contact
      </NavigationItem>
      <NavigationItem
        link="/marketplaces"
        active={location.pathname === "/marketplaces"}
      >
        Marché
      </NavigationItem>
      <NavigationItem
        link="/searchEngine"
        active={location.pathname === "/searchEngine"}
      >
        BD
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;

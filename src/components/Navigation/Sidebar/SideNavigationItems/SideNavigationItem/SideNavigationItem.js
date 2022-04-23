import React from "react";
import classes from "./SideNavigationItem.css";

const sideNavigationItem = (props) => (
  <li className={classes.SideNavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default sideNavigationItem;

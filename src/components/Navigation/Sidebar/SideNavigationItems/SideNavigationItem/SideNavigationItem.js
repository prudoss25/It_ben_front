import React from "react";
import { Link } from "react-router-dom";
import classes from "./SideNavigationItem.css";

const sideNavigationItem = (props) => (
  <li className={classes.SideNavigationItem}>
    <Link to={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </Link>
  </li>
);

export default sideNavigationItem;

import { ListItem, ListItemIcon } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./SideNavigationItem.css";

const sideNavigationItem = (props) => (
  // <li className={classes.SideNavigationItem}>
    <ListItem button selected={props.active} className={classes.SideNavigationItem}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <Link to={props.link}>
        {props.children}
      </Link> 
      {/* {props.children} */}
      {/* <ListItemText primary="Inbox" /> */}
    </ListItem>
  //   <Link to={props.link} className={props.active ? classes.active : null}>
  //   {props.children}
  // </Link> 
  // </li>
);

export default sideNavigationItem;

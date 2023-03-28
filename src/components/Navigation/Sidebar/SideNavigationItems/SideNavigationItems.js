import React from "react";
import SideNavigationItem from "./SideNavigationItem/SideNavigationItem";
import classes from "./SideNavigationItems.css";
import { useLocation } from "react-router-dom";
import getRoutes from "../../../../NavigationRoute";
import { useSelector } from "react-redux";
import { List } from "@material-ui/core";

const sideNavigationItems = () => {
  const location = useLocation();
  const role = useSelector((state) => state.auth.userInfos.role)
  
  return (
    <List component="ul" aria-label="main mailbox folders" className={classes.SideNavigationItems}>
      {
        getRoutes().filter(route => [...route.roles].includes('All') || [...route.roles].includes(role)).map((route,index) => (
          <SideNavigationItem link={route.path} icon={route.icon} active={location.pathname === route.path} key={index}>
            {route.name}
          </SideNavigationItem>
        ) )
      }
    </List>
  );
};

export default sideNavigationItems;

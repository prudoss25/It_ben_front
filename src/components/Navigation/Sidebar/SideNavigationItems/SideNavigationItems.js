import React from "react";
import SideNavigationItem from "./SideNavigationItem/SideNavigationItem";
import classes from "./SideNavigationItems.css";
import { useLocation } from "react-router-dom";

const sideNavigationItems = () => {
  const location = useLocation();
  return (
    <ul className={classes.SideNavigationItems}>
      <SideNavigationItem link="/informations" active={location.pathname === "/informations"}>
        Informations
      </SideNavigationItem>
      <SideNavigationItem link="/services" active={location.pathname === "/services"}>
        Services
      </SideNavigationItem>
      <hr style={{ width: "99%", textAlign: "left", marginLeft: "0" }}></hr>
      <SideNavigationItem link="/users" active={location.pathname === "/users"}>
        Liste Membres
      </SideNavigationItem>
      <SideNavigationItem link="/events" active={location.pathname === "/events"}>
        Evènements
      </SideNavigationItem>
      <SideNavigationItem link="/sponsors" active={location.pathname === "/sponsors"}>
        Sponsors
      </SideNavigationItem>
    </ul>
  );
};

export default sideNavigationItems;

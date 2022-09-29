import React from "react";
import SideNavigationItem from "./SideNavigationItem/SideNavigationItem";
import classes from "./SideNavigationItems.css";
import { useLocation } from "react-router-dom";
import getRoutes from "../../../../NavigationRoute";
import { useSelector } from "react-redux";

const sideNavigationItems = () => {
  const location = useLocation();
  const role = useSelector((state) => state.auth.userInfos.role)
  
  return (
    <ul className={classes.SideNavigationItems}>
      {
        getRoutes().filter(route => [...route.roles].includes('All') || [...route.roles].includes(role)).map((route,index) => (
          <SideNavigationItem link={route.path} active={location.pathname === route.path} key={index}>
            {route.name}
          </SideNavigationItem>
        ) )
      }
      {/* <SideNavigationItem link="/informations" active={location.pathname === "/informations"}>
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
      <SideNavigationItem link="/auth" active={location.pathname === "/auth"}>
        Authentification
      </SideNavigationItem>
      <SideNavigationItem link="/changepassword" active={location.pathname === "/changepassword"}>
        Changer Mot de Passe
      </SideNavigationItem> */}
    </ul>
  );
};

export default sideNavigationItems;

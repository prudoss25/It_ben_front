import React, { useEffect, useState } from "react";
import SideNavigationItems from "./SideNavigationItems/SideNavigationItems";
import classes from "./Sidebar.css";
import Aux from "../../../hoc/_Aux/_Aux";
import { useSelector } from "react-redux";
import Profil from "../Profil/Profil";
import Radium from "radium";

const sidebar = () => {
  const token = useSelector((state) => state.auth.token)
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(()=> {
    setAuthenticated(token == null ? false : true )
  },[token])
  const sidebarDrawer = useSelector((state) => state.sidebarDrawer.value);
  let attachedClasses = [classes.Sidebar, classes.Close];
  if (sidebarDrawer) {
    attachedClasses = [classes.Sidebar, classes.Open];
  }
  const styleProfil = {
    '@media(min-width:761px)':{
        display:'none'
    }
}
  return (
    <Aux>
      <aside className={attachedClasses.join(" ")}>
        {
          authenticated &&
          <div style={styleProfil}>
            <Profil />
          </div>
        }
        <nav>
          <SideNavigationItems />
        </nav>
      </aside>
    </Aux>
  );
};

export default Radium(sidebar);

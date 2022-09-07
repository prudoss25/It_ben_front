import React from "react";
import SideNavigationItems from "./SideNavigationItems/SideNavigationItems";
import classes from "./Sidebar.css";
import Aux from "../../../hoc/_Aux/_Aux";
import { useSelector } from "react-redux";

const sidebar = () => {
    const sidebarDrawer = useSelector((state) => state.sidebarDrawer.value)
    let attachedClasses = [classes.Sidebar, classes.Close];
    if(sidebarDrawer){
        attachedClasses = [classes.Sidebar,classes.Open];
    }
  return (
    <Aux>
      <aside className={attachedClasses.join(' ')}>
        <nav>
          <SideNavigationItems />
        </nav>
      </aside>
    </Aux>
  );
};

export default sidebar;
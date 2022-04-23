import React from "react";
import SideNavigationItems from "./SideNavigationItems/SideNavigationItems";
import classes from "./Sidebar.css";
import Aux from "../../../hoc/Aux/Aux";

const sidebar = (props) => {
    let attachedClasses = [classes.Sidebar, classes.Close];
    if(props.open){
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
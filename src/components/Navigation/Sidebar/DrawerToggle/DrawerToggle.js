import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../../features/reducers/SidebarDrawer/SidebarDrawerSlice";
import classes from "./DrawerToggle.css";

const drawerToggle = (props) => {
  const sidebarDrawer = useSelector((state) => state.sidebarDrawer.value)
  const dispatch = useDispatch();

  const toggleSidebarDrawer = () => {
    dispatch(toggle())
  }

  let attachedClasses = [classes.DrawerToggle, classes.Close];
  if (sidebarDrawer) {
    attachedClasses = [classes.DrawerToggle, classes.Open];
  }
  return (
    <div className={attachedClasses.join(' ')} onClick={toggleSidebarDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;

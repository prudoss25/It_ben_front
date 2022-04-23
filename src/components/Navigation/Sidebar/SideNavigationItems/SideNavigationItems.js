import React from "react";
import SideNavigationItem from "./SideNavigationItem/SideNavigationItem";
import classes from './SideNavigationItems.css';


const sideNavigationItems = () => (
    <ul className={classes.SideNavigationItems}>
        <SideNavigationItem link="/" active>Information</SideNavigationItem>
        <SideNavigationItem link="/">Services</SideNavigationItem>
    </ul>
);

export default sideNavigationItems;
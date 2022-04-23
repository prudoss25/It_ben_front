import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.css';


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Accueil</NavigationItem>
        <NavigationItem link="/">A propos</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
    </ul>
);

export default navigationItems;
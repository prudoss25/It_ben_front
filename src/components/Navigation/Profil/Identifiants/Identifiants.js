import React from "react";
import classes from "./Identifiants.css";

const identifiants = (props) => {
    return(
        <div className={classes.Identifiants}>
            <span className={classes.Name}>{props.name}</span>
            <span className={classes.Title}>{props.title}</span>
        </div>
    )
}

export default identifiants;
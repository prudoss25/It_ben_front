import React from 'react';
import classes from "./Notification.css";


const notification = (props) => {
    const classe= ["ri-notification-3-fill", classes.Notification2].join(" ");
    return(
        <div className={classes.Notification} >
            <i className={classe}></i>
        </div>
    )
}

export default notification;
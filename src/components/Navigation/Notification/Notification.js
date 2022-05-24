import { Badge, IconButton } from '@mui/material';
import React from 'react';
// import classes from "./Notification.css";
import NotificationsIcon from '@mui/icons-material/Notifications';

const notification = (props) => {
    // const classe= ["ri-notification-3-fill", classes.Notification2].join(" ");
    return(
        // <div className={classes.Notification} >
        //     <i className={classe}></i>
        // </div>
        <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    )
}

export default notification;
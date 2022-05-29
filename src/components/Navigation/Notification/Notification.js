import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge, IconButton } from "@material-ui/core";

const notification = (props) => {
  return (
    <IconButton
      size="medium"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={17} color="secondary" overlap="rectangular">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default notification;

import React, { useEffect, useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

const notification = (props) => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [showNotification,setShowNotification] = useState(false);
  useEffect(() => {
    setShowNotification(authenticated);
  },[authenticated])
  return (
    <IconButton
      size="medium"
      aria-label="show 17 new notifications"
      color="inherit"
      style={{display:showNotification ? 'block' : 'none'}}
    >
      <Badge badgeContent={0} color="secondary" overlap="rectangular">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default notification;

import React, { useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import NoticationAlert from "../../components/UI/NotificationAlert/NotificationAlert";

const withManagementForm = (Component) => (props) => {
  const [notification, setNotification] = useState({
    open: false,
    type: "info",
    message: "",
  });
  const onNotificationClosed = () => {
    props.refreshDataFunc();
    setNotification({
      open: false,
      type: "info",
      message: "",
    });
  };
  const openNotification = (type, message) => {
    setNotification({
      open: true,
      type,
      message,
    });
  };
  return (
    <Aux>
      {notification.open ? (
        <NoticationAlert
          handleClose={() => onNotificationClosed()}
          {...notification}
        />
      ) : (
        props.visible && (
          <Component
            {...props}
            openNotication={(type, message) => openNotification(type, message)}
          />
        )
      )}
    </Aux>
  );
};

export default withManagementForm;

import React from "react";
import LogOutIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { disconnectUser } from "../../../services/actions/Auth/AuthActions";

const disconnectIcon = () => {
    const dispatch = useDispatch() 
    const disconnect = () => {
        dispatch(disconnectUser())
    }
  return (
    <IconButton
      size="medium"
      color="inherit"
      onClick={disconnect}
    >
        <LogOutIcon />
    </IconButton>
  );
};

export default disconnectIcon;
import React, { useEffect, useState } from "react";
import LogOutIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { disconnectUser } from "../../../services/actions/Auth/AuthActions";

const disconnectIcon = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [showDisconnect,setShowDisconnect] = useState(false);
  const dispatch = useDispatch() 
  useEffect(() => {
      setShowDisconnect(authenticated);
    },[authenticated])
    const disconnect = () => {
        dispatch(disconnectUser())
    }

  return (
    <IconButton
      size="medium"
      color="inherit"
      onClick={disconnect}
      style={{display:showDisconnect ? 'block' : 'none'}}
    >
        <LogOutIcon />
    </IconButton>
  );
};

export default disconnectIcon;
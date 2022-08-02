import React from "react";
import classes from "./Profil.css";
import Avatar from "./Avatar/Avatar";
import Identifiants from "./Identifiants/Identifiants";
import defaultAvatar from "../../../assets/images/default_avatar.jpg";

const profil = (props) => {
  return (
    <div className={classes.Profil}>
      <div className={classes.AvatarContainer}>
        <Avatar photoProfil={defaultAvatar} name="John Joe" />
      </div>
      <Identifiants name="John Joe" title="Sécrétaire Général" />
    </div>
  );
};

export default profil;

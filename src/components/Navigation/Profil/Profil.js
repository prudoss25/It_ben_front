import React from "react";
import classes from "./Profil.css";
import Avatar from "./Avatar/Avatar";
import Identifiants from "./Identifiants/Identifiants";
import defaultAvatar from "../../../assets/images/default_avatar.jpg";
import { useSelector } from "react-redux";
import { ROLES } from "../../../Constantes";

const profil = (props) => {
  const user = useSelector((state) => state.auth.userInfos)
  return (
    <div className={classes.Profil}>
      <div className={classes.AvatarContainer}>
        <Avatar photoProfil={defaultAvatar} name={user.name} />
      </div>
      <Identifiants name={user.name} title={ROLES[user.role]} />
    </div>
  );
};

export default profil;

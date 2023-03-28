import React, { useEffect, useState } from "react";
import Avatar from "./Avatar/Avatar";
import Identifiants from "./Identifiants/Identifiants";
import defaultAvatar from "../../../assets/images/default_avatar.jpg";
import { useSelector } from "react-redux";
import { ROLES } from "../../../Constantes";
import {styled } from "@material-ui/core";

const profil = (props) => {
  const user = useSelector((state) => state.auth.userInfos);
  const authenticated = useSelector((state) => state.auth.authenticated);
  const [showProfil, setShowProfil] = useState(false);
  useEffect(() => {
    setShowProfil(authenticated);
  }, [authenticated]);
  const ProfilBlock = styled("div")(({ theme }) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display:(showProfil ? 'flex' : 'none')+ ' !important',
      alignItems:'space-between',
      width: '100%',
      flex: 1
    },
  }));

  return (
    <ProfilBlock>
      <Avatar photoProfil={defaultAvatar} name={user.name} />

      <Identifiants name={user.name} title={ROLES[user.role]} />

    </ProfilBlock>
  );
};

export default profil;

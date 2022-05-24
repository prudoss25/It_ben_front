import { Avatar } from "@mui/material";
import React from "react";

const avatar = (props) => {
  return (
    <Avatar
      alt={props.name}
      src={props.photoProfil}
      sx={{ width: 50, height: '50px !important', border: "1px solid #ccc" }}
    />
  );
};

export default avatar;

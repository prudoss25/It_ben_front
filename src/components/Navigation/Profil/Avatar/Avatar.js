import { Avatar } from "@material-ui/core";
import React from "react";

const avatar = (props) => {
  return (
    <Avatar
      alt={props.name}
      src={props.photoProfil}
      style={{ width: 55, border: "1px solid #ccc" }}
    />
  );
};

export default avatar;

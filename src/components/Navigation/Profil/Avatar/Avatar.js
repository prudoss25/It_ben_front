import React from "react";
import classes from "./Avatar.css";

const avatar = (props) => {
  return (
    <div className={classes.Avatar}>
      <img src={props.photoProfil} alt={props.name} />
    </div>
  );
};

export default avatar;

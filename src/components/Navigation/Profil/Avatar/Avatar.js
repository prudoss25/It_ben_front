import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  space: {
    marginLeft: 8,
    marginRight: 8
  }
}));
const avatar = (props) => {
  const classes = useStyles();
  return (
    <Avatar
      alt={props.name}
      src={props.photoProfil}
      className={[classes.large,classes.space].join(' ')}
    />
  );
};

export default avatar;

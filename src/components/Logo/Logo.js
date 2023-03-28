import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import asebemLogo from "../../assets/images/asebem.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const logo = (props) => {
  const classes = useStyles();
  const history = useHistory()
  return(
  <div className={classes.Logo} onClick={() => history.push("/")}>
    <Avatar src={asebemLogo} alt="ASEBEM" 
      className={classes.large}
    />
  </div>
)};

export default logo;

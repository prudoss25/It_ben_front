import { Avatar } from "@material-ui/core";
import React from "react";
import asebemLogo from "../../assets/images/asebem.png";
import classes from "./Logo.css";
import { useHistory } from "react-router-dom";

const logo = (props) => {
  const history = useHistory()
  return(
  <div className={classes.Logo} onClick={() => history.push("/")}>
    <Avatar src={asebemLogo} alt="ASEBEM" style={{ width: 50,height: '50px !important'}} />
  </div>
)};

export default logo;

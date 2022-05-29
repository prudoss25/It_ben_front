import { Avatar } from "@material-ui/core";
import React from "react";
import asebemLogo from "../../assets/images/asebem.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    {/* <img src={asebemLogo} alt="ASEBEM" /> */}
    <Avatar src={asebemLogo} alt="ASEBEM" style={{ width: 50,height: '50px !important'}} />
  </div>
);

export default logo;

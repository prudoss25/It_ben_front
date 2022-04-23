import React from "react";
import asebemLogo from "../../assets/images/asebem.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={asebemLogo} alt="ASEBEM" />
  </div>
);

export default logo;

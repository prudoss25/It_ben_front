import { Avatar } from "@mui/material";
import React from "react";
import asebemLogo from "../../assets/images/asebem.png";
import classes from "./Logo.css";

const logo = (props) => (
  <div className={classes.Logo}>
    {/* <img src={asebemLogo} alt="ASEBEM" /> */}
    <Avatar src={asebemLogo} alt="ASEBEM" sx={{ width: 50,height: '50px !important'}} />
  </div>
);

export default logo;

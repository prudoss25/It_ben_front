import React from "react";
import BarreVerticale from "../../BarresStyles/BarreVerticale";
import classes from "./RubriqueTitle.css";

const rubriqueTitle = (props) => {
  return (
    <div className={classes.RubriqueTitle}>
      <BarreVerticale />
      <p className={classes.Header}>{props.children}</p>
    </div>
  );
};

export default rubriqueTitle;

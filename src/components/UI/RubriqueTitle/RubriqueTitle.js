import React from "react";
import BarreVerticale from "../../BarresStyles/BarreVerticale";
import classes from "./RubriqueTitle.css";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const rubriqueTitle = (props) => {
  return (
    <div className={classes.RubriqueTitle}>
      <Grid container direction="row" alignItems="flex-start">
        <Grid item style={{height:"100%"}}>
          <BarreVerticale />
        </Grid>
        <Grid item>
          <p className={classes.Header}>{props.children}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default rubriqueTitle;

rubriqueTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

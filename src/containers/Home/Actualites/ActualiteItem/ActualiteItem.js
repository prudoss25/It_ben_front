import React from "react";
import Button from "../../../../components/UI/Button/Button";
import classes from "./ActualiteItem.css";
import asebemLogo from "../../../../assets/images/asebem.png"

const actualiteItem = (props) => {
  return (
    <div className={classes.Actu}>
      <p>
        <img src={asebemLogo} alt={props.sousTitre} className={classes.ActuImg} />
      </p>
      <h3 className={classes.ActuTitre}>{props.title}</h3>
      <h3 className={classes.ActuTheme}>{props.theme}</h3>
      <p className={classes.ActuDescription}>{props.description}</p>
      <Button action={props.action}>
        {props.titreBouton}
      </Button>
    </div>
  );
};

export default actualiteItem;
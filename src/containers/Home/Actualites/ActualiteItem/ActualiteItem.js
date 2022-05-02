import React from "react";
import Button from "../../../../components/UI/Button/Button";
import classes from "./ActualiteItem.css";

const actualiteItem = (props) => {
  return (
    <div className={classes.Actu}>
      <p>
        <img src={props.image} alt={props.sousTitre} className={classes.ActuImg} />
      </p>
      {/* <h3 className={classes.ActuTitre}>Actualité</h3> */}
      <h3 className={classes.ActuTitre}>{props.sousTitre}</h3>
      <p className={classes.ActuDescription}>{props.description}</p>
      <Button action={props.action}>
        {props.titreBouton}
      </Button>
    </div>
  );
};

export default actualiteItem;

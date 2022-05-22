import React from "react";
import classes from "./EvenementItem.css";


const EvenementItem = (props) =>{
    return(

        <div className={classes.Event} >
            <div className={classes.BlocImg}>
                <img
                className={classes.EventImg}
                src={props.src}
                alt={props.title}
                />
            </div>
            <div>
                <div className={classes.EventHeader}>
                    <p className={classes.EventTitre}>{props.title}</p>
                    <p className={classes.EventDate}>{props.date}</p>
                </div>
                <p className={classes.EventDescription}>
                    {props.description}
                </p>
            </div>
      </div>


    )


}

export default EvenementItem
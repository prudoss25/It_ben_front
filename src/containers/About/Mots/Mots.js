import React from "react";
import Aux from "../../../hoc/_Aux/_Aux";
import quote from "../../../assets/images/quote.png";
import classes from './Mots.css';

const Mots = props =>{
    const texte = "Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exerc L"
    return (
        <Aux>
            <div className={classes.Mots}>
                <h2>{props.titre}</h2>
                <span><img src={quote} alt="Quote"/></span>
                {texte}{texte}{texte}{texte}{texte}
                <h5>{props.auteur}</h5>
            </div>
        </Aux>
    )
}
export default Mots
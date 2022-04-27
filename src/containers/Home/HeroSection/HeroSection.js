import React from "react";
import Button from "../../../components/Button/Button";
import classes from './HeroSection.css';
import Aux from "../../../hoc/_Aux/_Aux";

function HeroSection ( ) {
    return (
        <Aux>
            <div className={classes.Hero_Section}>
                <div className={classes.Hero_Bloc}>
                    <p className={classes.Hero_Titre}>Bienvenue sur la plateforme de l'ASEBEM</p>
                    <p className={classes.Hero_Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exerc
                    </p>
                    <Button button="En savoir plus" width="150px"/>

                </div>
            </div>
        </Aux>
    )
}

export  default HeroSection
import React, { Component } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Concepteur from "./Concepteurs/Concepteur";
import EquipeDirigeante from "./EquipeDirigeante/EquipeDirigeante";
import Mots from "./Mots/Mots";
import Presentation from "./Presentation/Presentation";
import classes from "./About.css";


class About extends Component 
{
    render(){

        return(
            <Aux>
                About
                <Presentation/>
                <EquipeDirigeante/>
                <p className={classes.Mots}>
                    <Mots titre="Mot de l'Ambassade" auteur = "Serge Dagnon"/>
                    <Mots titre="Mot du CC" auteur = "DOSSOU Prudence"/>
                </p>
                <Concepteur/>

            </Aux>
        );
    }
}

export default About;
import React from "react";
import Aux from "../../../../hoc/_Aux/_Aux";
import facebook from "../../../../assets/images/facebook.png";
import instagram from "../../../../assets/images/instagram.png";
import linkedin from "../../../../assets/images/linkedin.png";
import classes from './ReseauxSociaux.css';


const ReseauxSociaux = () => {
    return (
        <Aux>
            <p className={classes.ReseauxSociaux}>
                <h1>Nos Reseaux Sociaux</h1>
                <ul>
                    <li><a href="/"><img src={facebook} alt="Facebook"/></a></li>
                    <li><a href="/"><img src={instagram} alt="Instagram"/></a></li>
                    <li><a href="/"><img src={linkedin} alt="Linkedin"/></a></li>
                </ul>
            </p>
        </Aux>
    )
}
export default ReseauxSociaux
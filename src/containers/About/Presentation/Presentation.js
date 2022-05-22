import React from "react";
import Aux from "../../../hoc/_Aux/_Aux";
import classes from './Presentation.css';

const Presentation = () => {
    const TextePresentation = "Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exerc Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercLorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercLorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercLorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercLorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercLorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercLorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exerc"
    return (
        <Aux>
            <p className={classes.Presentation}>
                <h2>Presentation de l'ASEBEM</h2>
                {TextePresentation}
                {TextePresentation} 
            </p>
            
            
        </Aux>
    )

}
export default Presentation
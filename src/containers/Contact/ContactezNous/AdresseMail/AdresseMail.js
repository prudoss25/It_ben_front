import React from "react";
import Aux from "../../../../hoc/_Aux/_Aux";
import email from "../../../../assets/images/email.png";
import classes from './AdresseMail.css';

const AdresseMail = () => {
    return (
        <Aux>
            <div className={classes.AdresseMail}>
                <p>
                    <img src={email} alt="AdresseMail"/>
                    <h2>Adresses Mail</h2>
                </p>
                <ul>
                    <li>mailasebem@gmail.com</li>
                    <li>mailcc@gmail.com</li>
                </ul>
            </div>
        </Aux>
    )
}
export default AdresseMail
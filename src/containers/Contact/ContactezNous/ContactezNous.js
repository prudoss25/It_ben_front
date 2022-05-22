import React from "react";
//import Aux from "../../../hoc/_Aux/_Aux";
import AdresseMail from "./AdresseMail/AdresseMail";
//import classes from './Contact.css';
import ReseauxSociaux from "./ReseauxSociaux/ReseauxSociaux";
import Telephone from "./Telephone/Telephone";
import classes from "./ContactezNous.css";

const ContactezNous = props => {
    return (
        <div className={classes.ContactezNous}>
            <h1>Contactez-Nous</h1>
            <h4>Ci-joint les différents canaux par lesquels nous sommes joignables.
                N'hésitez pas à nous joindre ou nous envoyer un message via le formulaire.
            </h4>
            <section>
                <AdresseMail/>
                <Telephone/>
            </section>
            <ReseauxSociaux/>
        </div>
    )
}

export default ContactezNous
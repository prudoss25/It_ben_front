import React from "react";
import Aux from "../../../hoc/_Aux/_Aux";
import classes from "./Concepteur.css";

const Concepteur = props => {
    const Concepteur =[
        {
            nom : "Prudence DOSSOU",
            Titre : "Developpeur FullStack",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "Eraste Akande",
            Titre : "Data Scientist",
            image: "https://picsum.photos/150/150?2"
        },
        {
            nom : "Michel SAGBO",
            Titre: "Etudiant en Data Science",
            image: "https://picsum.photos/150/150?3"
        },
        {
            nom : "Manoel AZON",
            Titre : "Etudiant en Informatique",
            image: "https://picsum.photos/150/150?4"
        }
    ]
    return (
        <Aux>
            <h2 className={classes.Titre}>Ont contribué à la conception de la plateforme</h2>
            <section className={classes.Concepteur}>
                {Concepteur.map((membre, index) =>(
                    <p  key={index}>
                        <img src={membre.image} alt="Membre Equipe Dirigeante"/>
                        <br/>
                        {membre.nom}
                        <br/>
                        <span>{membre.Titre}</span>
                    </p>
                ))}
            </section>
           
        </Aux>
    )
}
export default Concepteur
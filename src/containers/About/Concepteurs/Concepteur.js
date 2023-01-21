import React from "react";
import Aux from "../../../hoc/_Aux/_Aux";
import classes from "./Concepteur.css";
import PCC from "../../../assets/images/PCC.jpeg";
import cca from "../../../assets/images/cca.jpeg";
import manoel from "../../../assets/images/manoel.jpg";
import michel from "../../../assets/images/michel.jpg";
import eraste from "../../../assets/images/eraste.jpg";
const Concepteur = props => {
    const Concepteur =[
        {
            nom : "AKAKPO Joël",
            Titre : "Consultant",
            image: cca
        },
        {
            nom : "Prudence DOSSOU",
            Titre : "Developpeur FullStack",
            image: PCC
        },
        {
            nom : "Eraste Akande",
            Titre : "Data Scientist",
            image: eraste
        },
        {
            nom : "Michel SAGBO",
            Titre: "Etudiant en Data Science",
            image: michel
        },
        {
            nom : "Manoel AZON",
            Titre : "Etudiant en Informatique",
            image: manoel
        }
    ]
    return (
        <Aux>
            <h2 className={classes.Titre}>Ont contribué à la conception de la plateforme</h2>
            <section className={classes.Concepteur}>

                {Concepteur.map((membre, index) =>(
                    <div className={classes.composant}>
                        <div key={index}>
                            <img style={{objectFit:"contain", marginLeft: '12%'}} src={membre.image} alt={membre.Titre}/>
                            <br/>
                            <div style={{textAlign: 'center', color: 'inherit', marginTop: '2px'}}>{membre.nom}</div>
                            <div style={{textAlign: 'center', color: '#D72F2F', marginTop: '2px'}}>{membre.Titre}</div>
                        </div>
                    </div>
                ))}
            </section>
           
        </Aux>
    )
}
export default Concepteur
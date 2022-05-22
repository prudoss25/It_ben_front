import React from "react";
import Aux from "../../../hoc/_Aux/_Aux";
import classes from "./EquipeDirigeante.css";

const EquipeDirigeante = props => {
    const BureauExecutif =[
        {
            nom : "NompPrenom",
            poste : "Secretaire general",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "NompPrenom",
            poste : "Secretaire general Adjoint",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "NompPrenom",
            poste : "Commissaire aux comptes",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "NompPrenom",
            poste : "Tresorier Général",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "NompPrenom",
            poste : "Chargé de la communication",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "NompPrenom",
            poste : "Chargé culturel et sportif",
            image: "https://picsum.photos/150/150?1"
        }
    ]
    const ConseilConsultatif =[
        {
            nom : "NompPrenom",
            poste : "President",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "NompPrenom",
            poste : "Vice-President",
            image: "https://picsum.photos/150/150?1"
        },
        {
            nom : "NompPrenom",
            poste : "Secretaire Général d'honneur",
            image: "https://picsum.photos/150/150?1"
        }
    ]
    return (
        <Aux>
            <h2 className={classes.Titre}>Bureau Executif</h2>
            <section className={classes.EquipeDirigeante}>
                {BureauExecutif.map((membre, index) =>(
                    <p key={index}>
                        <img src={membre.image} alt="Membre Equipe Dirigeante"/>
                        <br/>
                        {membre.nom}
                        <br/>
                        <span>{membre.poste}</span>
                    </p>
                ))}
            </section>
            <h2 className={classes.Titre}>Conseil Consultatif</h2>
            <section className={classes.EquipeDirigeante}>
                {ConseilConsultatif.map((membre, index) =>(
                    <p key={index}>
                        <img src={membre.image} alt="Membre Equipe Dirigeante"/>
                        <br/>
                        {membre.nom}
                        <br/>
                        <span>{membre.poste}</span>
                    </p>
                ))}

            </section>
        </Aux>
    )
}
export default EquipeDirigeante
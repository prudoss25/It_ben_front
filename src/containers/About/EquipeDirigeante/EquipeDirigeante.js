import React from "react";
import Aux from "../../../hoc/_Aux/_Aux";
import classes from "./EquipeDirigeante.css";
import sg_honneur from "../../../assets/images/sg_honneur.jpeg";
import sga from "../../../assets/images/sga.jpeg";
import tresoriere from "../../../assets/images/tresoriere.jpeg";
import PCC from "../../../assets/images/PCC.jpeg";
import charge_com from "../../../assets/images/charge_com.jpeg";
import charge_sport_cult from "../../../assets/images/charge_sport_cult.jpeg";
import commiss_compte from "../../../assets/images/commiss_compte.jpeg";
import sg from "../../../assets/images/sg.jpeg";
import cca from "../../../assets/images/cca.jpeg";
import { stringFormat } from "../../../Functions";

const EquipeDirigeante = props => {
    const BureauExecutif =[
        {
            nom : "TCHAGAFO Nazif",
            poste : "Secretaire general",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"SG")
        },
        {
            nom : "ENIANLOKO Dylan",
            poste : "Secretaire general Adjoint",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"SGA")
        },
        {
            nom : "BIOKOU Saint Luc",
            poste : "Commissaire aux comptes",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"Commissaire")
        },
        {
            nom : "NASSARA Marie Colombe",
            poste : "Tresorier(e) Général",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"Tresorier")
        },
        {
            nom : "AHOSSI Nelly",
            poste : "Chargé de la communication",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"Communication")
        },
        {
            nom : "ADDA Réthens",
            poste : "Chargé culturel et sportif",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"CCS")
        }
    ]
    const ConseilConsultatif =[
        {
            nom : "DOSSOU Prudence",
            poste : "President",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"PCC")
        },
        {
            nom : "Akakpo Joël",
            poste : "Vice-President",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"PACC")
        },
        {
            nom : "Soglo Oscar",
            poste : "Secretaire Général d'honneur",
            image: stringFormat(process.env.REACT_APP_BE_FOLDER_BASE_URL,"SGH")
        }
    ]
    return (
        <Aux>
            <h2 className={classes.Titre}>Bureau Executif</h2>
            <section className={classes.EquipeDirigeante}>
                {BureauExecutif.map((membre, index) =>(
                    <div className={classes.composant}>
                        <div key={index}>
                            <img style={{objectFit:"contain", marginLeft: '12%'}} src={membre.image} alt="Membre Equipe Dirigeante"/>
                            <br/>
                            <div style={{textAlign: 'center', color: 'inherit', marginTop: '2px'}}>{membre.nom}</div>
                            <div style={{textAlign: 'center', color: '#D72F2F', marginTop: '2px'}}>{membre.poste}</div>
                        </div>
                    </div>
                ))}
            </section>
            <h2 className={classes.Titre}>Conseil Consultatif</h2>
            <section className={classes.EquipeDirigeante}>
                {ConseilConsultatif.map((membre, index) =>(
                    <div className={classes.composant}>
                        <div key={index}>
                            <img style={{objectFit:"contain", marginLeft: '12%'}} src={membre.image} alt="Membre Equipe Dirigeante"/>
                            <br/>
                            <div style={{textAlign: 'center', color: 'inherit', marginTop: '2px'}}>{membre.nom}</div>
                            <div style={{textAlign: 'center', color: '#D72F2F', marginTop: '2px'}}>{membre.poste}</div>
                        </div>
                    </div>
                ))}

            </section>
        </Aux>
    )
}
export default EquipeDirigeante
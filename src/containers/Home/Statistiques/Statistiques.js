import React from 'react';
import classes from './Statistiques.css';
import Aux from '../../../hoc/_Aux/_Aux';


function Statistiques (props) {

    const Data_Statistiques=[
        {
            id:'1',
            titre:'Etudiants',
            chiffre:'300'
        },
        {
            id:'2',
            titre:'Années d\'esxistences',
            chiffre:'20'
        },
        {
            id:'3',
            titre:'Villes au Maroc',
            chiffre:'8'
        }
    ]

    return(
        <Aux>
            <p className={classes.Statistiques_titre_asebem}>L'ASEBEM c'est</p>
            <p className={classes.Statistiques} >
                {Data_Statistiques.map( stats =>(
                    <p key={stats.id}>
                        <p className={classes.Stats_chiffres}>+{stats.chiffre}</p>
                        <p className={classes.Stats_titre}>{stats.titre}</p>
                    </p>
                ))}
                
            </p>
        </Aux>
    )
}

export default Statistiques

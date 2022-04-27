import React from 'react';
import classes from './Partenaires.css';
import Aux from '../../../hoc/_Aux/_Aux';

function Partenaires () {
    const Data_Partenaires=[
        {
            id:'1',
            nom:'Part1',
            logo:"https://picsum.photos/100/100"
        },
        {
            id:'2',
            nom:'Part3',
            logo:"https://picsum.photos/100/100"
        },
        {
            id:'3',
            nom:'Part3',
            logo:"https://picsum.photos/100/100"
        },
        {
            id:'4',
            nom:'Part14',
            logo:"https://picsum.photos/100/100"
        }
    ]
   

    return (
       

        <Aux>
            <p className={classes.Partenaires_titre}>Partenaires</p>
            <p className={classes.Partenaires}>
                {Data_Partenaires.map(partenaires=>(
                     <div key={partenaires.id}>
                        <img className={classes.Part_img} src={partenaires.logo} alt='partenaire'/>
                        <p className={classes.Part_titre}>{partenaires.nom}</p>
                    </div>
                ))}
            </p>
            
        </Aux>
    )
}

export default Partenaires


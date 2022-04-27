import React from "react";
import classes from './Evenement.css';
import Classes from '../Actualites/Actualitee.css';
import BarreHorizontale from "../../../components/Barres_styles/BarreHorizontale";
import BarreVerticale from "../../../components/Barres_styles/BarreVerticale";

function Evenement () {
    const description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "

    const Data_Event=[
        {
            id:'1',
            img:"https://picsum.photos/150/150",
            date:'20 aout 1980',
            description: description
        },
        {
            id:'2',
            img:"https://picsum.photos/150/150",
            date:'20 aout 1980',
            description: description
        }
    ]




    return (

        <div className={classes.Evenement}>

            <div >
                <p className={Classes.Subheader1} >
                    <BarreVerticale/>
                    <p className={Classes.Header}>Evènements et<br/>Activités</p>
                </p>
                <BarreHorizontale/>
            </div>

            <div className={classes.Evenement_Events}>
                {Data_Event.map(evenement=> (
                    <div className={classes.Event} key={evenement.id}>
                        <div className={classes.Bloc_Img}>
                            <p><img className={classes.Event_Img} src={evenement.img} alt='event'/></p>
                        </div>
                        <div >
                            <div className={classes.Event_Header}>
                                <p className={classes.Event_Titre}>Activité</p>
                                <p className={classes.Event_Date}>{evenement.date}</p>
                            </div>
                            <p className={classes.Event_Description}>{evenement.description}</p>
                        </div>
                    </div>  
                ))}
            </div>

        </div>
    )
}

export default Evenement
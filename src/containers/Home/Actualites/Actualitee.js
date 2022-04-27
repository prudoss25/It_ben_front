import React, {Component} from "react";
import classes from './Actualitee.css';
import Button from "../../../components/Button/Button";
import BarreHorizontale from "../../../components/Barres_styles/BarreHorizontale";
import BarreVerticale from "../../../components/Barres_styles/BarreVerticale";
import chevronGauche from '../../../assets/images/chevron-gauche.png';
import chevronDroit from '../../../assets/images/chevron-droit.png';



class Actualite extends Component{



    description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    Bouton_Actu={
        width:'75px',
        titre:'Voir +'
    }
    Data_Actu=[
        {
        id:"1",
        img:"https://picsum.photos/300/200",
        sousTitre:"Titre de l'actualité ou de l'évènement ",
        description:this.description,
        titre_bouton : this.Bouton_Actu.titre,
        largeure_bouton : this.Bouton_Actu.width,
        action:""
    },
    {
        id:"2",
        img:"https://picsum.photos/300/200",
        sousTitre:"Titre de l'actualité ou de l'évènement ",
        description:this.description,
        titre_bouton : this.Bouton_Actu.titre,
        largeure_bouton : this.Bouton_Actu.width,
        action:""
    },
    {
        id:"3",
        img:"https://picsum.photos/300/200",
        sousTitre:"Titre de l'actualité ou de l'évènement ",
        description:this.description,
        titre_bouton : this.Bouton_Actu.titre,
        largeure_bouton : this.Bouton_Actu.width,
        action:""
    },
    {
        id:"4",
        img:"https://picsum.photos/300/200",
        sousTitre:"Titre de l'actualité ou de l'évènement ",
        description:this.description,
        titre_bouton : this.Bouton_Actu.titre,
        largeure_bouton : this.Bouton_Actu.width,
        action:""
    }
]
    state={
        style:{
                width: this.Data_Actu.length*50 +'%',
                display: 'flex',
                flexDirection: 'row'
                
        },
        masquerGauche:{
            visibility:''
        },
        masquerDroit:{
            visibility:''
        }
        
    }
    n=this.Data_Actu.length;
    p=0;

    afficher_masquer =() =>{
        (this.p === -this.n+2) ? this.setState({masquerGauche:{visibility:'hidden'}}) : this.setState({masquerGauche:{visibility:'visible'}});
        (this.p === 0) ? this.setState({masquerDroit:{visibility:'hidden'}}) : this.setState({masquerDroit:{visibility:'visible'}});
    }



    boutonGaucheHandler= () => { 
        if(this.p > -(this.n+2))
            this.p--;
         
        this.setState({style:{
            width:this.p*50+'%',
            display: 'flex',
            flexDirection: 'row',
            transform:'translate('+this.p*25+'%)',
            transition:'all 0.5s ease'
        }})
        this.afficher_masquer();
    }

    boutonDroitHandler= () =>{
        if(this.p <0)
            this.p++;

        this.setState({style:{
            width:Math.abs(this.p*50+'%'),
            display: 'flex',
            flexDirection: 'row',
            transform:'translate('+this.p*25+'%)',
            transition:'all 0.5s ease'
        }})
        this.afficher_masquer();   
    }




    render(){

        return (
            <div className={classes.Ac}>
                
                <div className={classes.BlocHeaderActu} >
                    <div >
                        <p className={classes.Subheader1} >
                            <BarreVerticale/>
                            <p className={classes.Header}>Actualités et<br/>Informations</p>
                        </p>
                        <BarreHorizontale/>
                    </div>
                    <div>
                        <img src={chevronGauche} alt="chevron gauche" className={classes.Chevron} id="chevronGauche" style={this.state.masquerGauche} onClick={this.boutonGaucheHandler} />
                        <img src={chevronDroit} alt="chevron droit" className={classes.Chevron} id="chevronDroit" style={this.state.masquerDroit} onClick={this.boutonDroitHandler}/>
                    </div>
                </div>
    
    
                <div  style={this.state.style}>
                    { this.Data_Actu.map (actu  => (
                        <div className={classes.Actu} key={actu.id}>
                            <p ><img src={actu.img} alt='actualité' className={classes.ActuImg} /></p>
                            <h3 className={classes.ActuTitre}>Actualité</h3>
                            <h4 className={classes.ActuSousTitre}>{actu.sousTitre}</h4>
                            <p className={classes.ActuDescription}>{actu.description}</p>
                            <Button button ={actu.titre_bouton} width={actu.largeure_bouton} action={actu.action} />
                        </div>
    
                    )) }
                </div>
            </div>
        )
   

    }
}

    
export default Actualite

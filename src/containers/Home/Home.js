import React, { Component } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Statistiques from "./Statistiques/Statistiques";
import Partenaires from "./Partenaires/Partenaires";
import HeroSection from "./HeroSection/HeroSection";
import Evenement from "./Evenements/Evenement";
import classes from './Home.css';
import GaleriePhoto from "./GaleriePhoto/GaleriePhoto";
import Actualite from "./Actualites/Actualitee";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
   
    render(){
        return(
            <Aux>
                <HeroSection/>
                <div className={classes.Section_Actu}>
                    <Actualite/>
                    <Evenement/>
                </div>
                <Partenaires/>
                <Statistiques/>
                <GaleriePhoto/>
                <Footer/>

            </Aux>
        );
    }
}
export default Home;
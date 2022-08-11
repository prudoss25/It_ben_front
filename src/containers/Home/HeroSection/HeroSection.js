import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./HeroSection.css";
import Aux from "../../../hoc/_Aux/_Aux";
import { useHistory } from "react-router-dom";

const heroSection = (props) => {
  const history = useHistory()
  return (
    <Aux>
      <div className={classes.HeroSection}>
        <div className={classes.HeroBloc}>
          <p className={classes.HeroTitre}>
            Association des Etudiants et Stagiaires Béninois au Maroc 
          </p>
          <p className={classes.HeroText}>
            Nous vous souhaitons la bienvenu sur notre plateforme ASEBEM Book
          </p>
          <Button action={() => {history.push("/about")}}>En savoir plus</Button>
        </div>
      </div>
    </Aux>
  );
};

export default heroSection;

import React from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./HeroSection.css";
import Aux from "../../../hoc/_Aux/_Aux";

const heroSection = (props) => {
  return (
    <Aux>
      <div className={classes.HeroSection}>
        <div className={classes.HeroBloc}>
          <p className={classes.HeroTitre}>
            Bienvenue sur la plateforme de l'ASEBEM
          </p>
          <p className={classes.HeroText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enimad minim veniam, quis nostrud exerc
          </p>
          <Button action={() => {}}>En savoir plus</Button>
        </div>
      </div>
    </Aux>
  );
};

export default heroSection;

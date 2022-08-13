import React, { useEffect, useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Statistiques from "./Statistiques/Statistiques";
import Partenaires from "./Partenaires/Partenaires";
import HeroSection from "./HeroSection/HeroSection";
import Evenement from "./Evenements/Evenement";
// import classes from "./Home.css";
import GaleriePhoto from "./GaleriePhoto/GaleriePhoto";
import Actualite from "./Actualites/Actualitee";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { FIND_ALL_NEXT_EVENTS } from "../../Routes";
import { Grid } from "@material-ui/core";

const Home = () => {
  const [actualites, setActualites] = useState(null);
  const [evenements, setEvenements] = useState(null);
  useEffect(() => {
    getActualites();
  }, []);
  const getActualites = () => {
    axios.get(FIND_ALL_NEXT_EVENTS).then((response) => {
      if (response.status === 200) {
        setActualites([...response.data]);
        setEvenements([...response.data]);
      }
      return [];
    });
  };
  return (
    <Aux>
      <HeroSection />
      {/* <div className={classes.Section_Actu}> */}
      <Grid container wrap>
        <Grid item xs={7}>
          <Actualite actualites={actualites} />
        </Grid>
        <Grid item xs={5}>
          <Evenement evenements={evenements} />
        </Grid>
      </Grid>

      {/* </div> */}
      <Partenaires />
      <Statistiques />
      <GaleriePhoto />
      <Footer />
    </Aux>
  );
};
export default Home;

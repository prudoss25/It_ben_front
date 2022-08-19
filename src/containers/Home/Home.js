import React, { useEffect, useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Statistiques from "./Statistiques/Statistiques";
import Partenaires from "./Partenaires/Partenaires";
import HeroSection from "./HeroSection/HeroSection";
import Evenement from "./Evenements/Evenement";
import GaleriePhoto from "./GaleriePhoto/GaleriePhoto";
import Actualite from "./Actualites/Actualitee";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { FIND_ALL_NEWS, FIND_ALL_NEXT_EVENTS, FIND_ALL_SPONSORS } from "../../Routes";
import { Grid } from "@material-ui/core";

const Home = () => {
  const [actualites, setActualites] = useState(null);
  const [evenements, setEvenements] = useState(null);
  const [sponsors, setSponsors] = useState(null);
  useEffect(() => {
    Promise.all([getActualites(),
      getSponsors(),
      getEvenements()
      ])
    
  }, []);
  const getActualites = () => {
    axios.get(FIND_ALL_NEXT_EVENTS).then((response) => {
      if (response.status === 200) {
        setActualites([...response.data]);
      }
      return [];
    });
  };
  const getSponsors = () => {
    axios.get(FIND_ALL_SPONSORS).then((response) => {
      if (response.status === 200) {
        setSponsors(response.data);
      }
    });
  }
  const getEvenements = () => {
    axios.get(FIND_ALL_NEWS).then((response) => {
      if (response.status === 200) {
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
          <Actualite actualites={actualites} sponsors={sponsors} />
        </Grid>
        <Grid item xs={5}>
          <Evenement evenements={evenements} sponsors={sponsors} />
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

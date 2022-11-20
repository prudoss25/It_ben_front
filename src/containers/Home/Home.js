import React, { useEffect, useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Statistiques from "./Statistiques/Statistiques";
import Partenaires from "./Partenaires/Partenaires";
import HeroSection from "./HeroSection/HeroSection";
import Evenement from "./Evenements/Evenement";
import GaleriePhoto from "./GaleriePhoto/GaleriePhoto";
import Actualite from "./Actualites/Actualitee";
import axios from "axios";
import { FIND_ALL_EVENTS_DESC, FIND_ALL_SPONSORS } from "../../Routes";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../services/reducers/Event/EventSlice";
import { fetchSponsors } from "../../services/reducers/Sponsor/SponsorSlice";
import classes from "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const nextEvents = useSelector(state => state.event.nexts);
  const currentEvents = useSelector(state => state.event.currents);
  const [actualites, setActualites] = useState(null);
  const [evenements, setEvenements] = useState(null);
  useEffect(() => {
    Promise.all([
      getSponsors(),
      getEvenements()
      ])
  }, []);
  useEffect(() => {
    setEvenements(nextEvents)
  },[nextEvents])
  useEffect(() => {
    setActualites(currentEvents)
  },[currentEvents])
  
  const getSponsors = () => {
    axios.get(FIND_ALL_SPONSORS).then((response) => {
      if (response.status === 200) {
        fetchSponsors(response.data);
      }
    });
  }
  const getEvenements = () => {
    axios.get(FIND_ALL_EVENTS_DESC).then((response) => {
      if (response.status === 200) {
        dispatch(fetchEvents(response.data))
      }
      return [];
    });
  };
  return (
    <Aux>
      <HeroSection />
      <Grid container justifyContent="space-around">
        <Grid item className={classes.ActuGrid}>
          <Actualite actualites={actualites} />
        </Grid>
        <Grid item className={classes.EventGrid}>
          <Evenement evenements={evenements} />
        </Grid>
      </Grid>
      <Partenaires />
      <Statistiques />
      <GaleriePhoto />
      {/* <Footer /> */}
    </Aux>
  );
};
export default Home;

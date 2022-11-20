import React, { useEffect, useMemo, useState } from "react";
import classes from "./Evenement.css";
import RubriqueTitle from "../../../components/UI/RubriqueTitle/RubriqueTitle";
import EvenementItem from "./EvenementItem/EvenementItem";
import ConsultEvent from "../../Evenements/ConsultEvent/ConsultEvent";
import chevronHaut from "../../../assets/images/chevron-haut.png";
import chevronBas from "../../../assets/images/chevron-bas.png";
import PropTypes from "prop-types";
import ActualiteVide from "../ActualiteVide";
import { Grid } from "@material-ui/core";

const evenement = (props) => {

  const [currentEvent, setCurrentEvent] = useState(null);
  const [openConsult, setOpenConsult] = useState(null);
  const [loading, setLoading] = useState(true)
  const [position, setPosition] = useState(0);
  const [masquerHaut, setMasquerHaut] = useState({
    visibility: "",
  });
  const [masquerBas, setMasquerBas] = useState({
    visibility: "",
  });
  const [style, setStyle] = useState({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width:"100%"
  })
 
  useEffect(() => {
    afficher_masquer(position)
    if(props.evenements)
    {
      setLoading(false)
      const length = [...props.evenements].length;
      setStyle({...style,height:length >= 2 ? length * 50 + "%" : "100%"})
    }
    else{
      setLoading(true)
    }
  },[props.evenements])
  const afficher_masquer = (pos) => {
    if(n <= 2)
    {
      setMasquerHaut({ visibility: "hidden" })
      setMasquerBas({ visibility: "hidden" })
    }
    else{
      pos === -n + 2
        ? setMasquerHaut({ visibility: "hidden" })
        : setMasquerHaut({ visibility: "visible" });
      pos === 0
        ? setMasquerBas({ visibility: "hidden" })
        : setMasquerBas({ visibility: "visible" });
    }
  };

  const boutonHautHandler = () => {
    let newPosition = position;
    if (position> -(n + 2)) 
      newPosition = position-1;
    setPosition(newPosition);
    setStyle({
      ...style,
      height: newPosition* 50 + "%",
      transform: "translateY(" + newPosition * 25 + "%)",
      transition: "all 0.5s ease",
    })
    
    afficher_masquer(newPosition);
  };

  const boutonBasHandler = () => {
    let newPosition = position;
    if (position< 0) 
      newPosition = position+1;
    setPosition(newPosition);
    setStyle({
      ...style,
      height: Math.abs(newPosition * 50 + "%"),
      transform: "translateY(" + newPosition * 25 + "%)",
      transition: "all 0.5s ease",
    })
    
    afficher_masquer(newPosition);
  };
  const consulter = (event) => {
    setCurrentEvent(event);
    setOpenConsult(true);
  };
  const handleCloseConsult = () => {
    setCurrentEvent(null);
    setOpenConsult(false);
  };
  const { Data_Actu, n } = useMemo(() => {
    return props.evenements ? {
      Data_Actu: [...props.evenements],
      n: [...props.evenements].length,
    } : {
      Data_Actu: [1,2],
      n: 0,
    };
  }, [props.evenements]);
  return (
    <div className={classes.Evenement}>
      <div className={classes.BlocHeaderEvent}>
        <RubriqueTitle>A venir</RubriqueTitle>
        <div >
          <img
            src={chevronHaut}
            alt="chevron haut"
            className={classes.Chevron}
            id="chevronHaut"
            style={masquerHaut}
            onClick={boutonHautHandler}
          />
          <img
            src={chevronBas}
            alt="chevron bas"
            className={classes.Chevron}
            id="chevronBas"
            style={masquerBas}
            onClick={boutonBasHandler}
          />
        </div>
      </div>
      <div style={{overflow:"hidden"}}>
        <Grid style={style}>
          {
          Data_Actu.length > 0 ? Data_Actu.map((event) => (
            <Grid item key={event.idEvent}>
              <EvenementItem 
                startDate={event.startDate}
                loading={loading}
                title={event.title}
                theme={event.theme}
                description={event.description}
                action={() => consulter(event)}
                />
            </Grid>
          ))
          : <ActualiteVide text={"Pas d'évènements à venir"} />
        }
        </Grid>
      </div>
      {openConsult && (
          <ConsultEvent
            event={currentEvent}
            open={openConsult}
            handleToggle={() => handleCloseConsult()}
          />
        )}
    </div>
  );
}

export default evenement;
evenement.propTypes = {
  evenements: PropTypes.array.isRequired
};
import React, { useEffect, useMemo, useState } from "react";
import classes from "./Evenement.css";
import RubriqueTitle from "../../../components/UI/RubriqueTitle/RubriqueTitle";
import EvenementItem from "./EvenementItem/EvenementItem";
import ConsultEvent from "../../Evenements/ConsultEvent/ConsultEvent";
import chevronHaut from "../../../assets/images/chevron-haut.png";
import chevronBas from "../../../assets/images/chevron-bas.png";

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
      setStyle({...style,height:[...props.evenements].length * 50 + "%"})
    }
    else{
      setLoading(true)
    }
  },[props.evenements])
  const afficher_masquer = (pos) => {
    pos === -n + 2
      ? setMasquerHaut({ visibility: "hidden" })
      : setMasquerHaut({ visibility: "visible" });
    pos === 0
      ? setMasquerBas({ visibility: "hidden" })
      : setMasquerBas({ visibility: "visible" });
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
        <div style={style}>
          {Data_Actu.map((event) => (
            <EvenementItem 
              loading={loading}
              key={event.idEvent}
              title={event.title}
              theme={event.theme}
              description={event.description}
              src={"https://picsum.photos/150/150"}
              action={() => consulter(event)}
              />
            // <div className={classes.Event} key={event.id}>
            //   <div className={classes.BlocImg}>
            //       <img
            //         className={classes.EventImg}
            //         src={event.img}
            //         alt={event.title}
            //       />
            //   </div>
            //   <div>
            //     <div className={classes.EventHeader}>
            //       <p className={classes.EventTitre}>{event.title}</p>
            //       <p className={classes.EventDate}>{event.date}</p>
            //     </div>
            //     <p className={classes.EventDescription}>
            //       {event.description}
            //     </p>
            //   </div>
            // </div>
          ))}
          
        </div>
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

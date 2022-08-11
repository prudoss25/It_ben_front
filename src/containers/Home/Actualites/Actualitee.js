import React, { useEffect, useMemo, useState } from "react";
import classes from "./Actualitee.css";
import chevronGauche from "../../../assets/images/chevron-gauche.png";
import chevronDroit from "../../../assets/images/chevron-droit.png";
import ActualiteItem from "./ActualiteItem/ActualiteItem";
import RubriqueTitle from "../../../components/UI/RubriqueTitle/RubriqueTitle";
import ConsultEvent from "../../Evenements/ConsultEvent/ConsultEvent";

const Actualite = (props) => {
  const [currentActualite, setCurrentActualite] = useState(null);
  const [openConsult, setOpenConsult] = useState(null);
  const [masquerGauche, setMasquerGauche] = useState({
    visibility: "",
  });
  const [masquerDroit, setMasquerDroit] = useState({
    visibility: "",
  });
  const [position, setPosition] = useState(0);
  const [loading, setLoading] = useState(true)
  const [style, setStyle] = useState({
    width: "100%",
    display: "flex",
    flexDirection: "row",
  })
  
  useEffect(() => {
    afficher_masquer(position)
    if(props.actualites)
    {
      setLoading(false)
      setStyle({...style,width:[...props.actualites].length * 50 + "%"})
    }
    else{
      setLoading(true)
    }
  },[props.actualites])
 
  const { Data_Actu, n } = useMemo(() => {
      return props.actualites ? {
        Data_Actu: [...props.actualites],
        n: [...props.actualites].length,
      } : {
        Data_Actu: [1,2],
        n: 0,
      };
  }, [props.actualites]);

  const afficher_masquer = (pos) => {
    pos === -n + 2
      ? setMasquerGauche({ visibility: "hidden" })
      : setMasquerGauche({ visibility: "visible" });
    pos === 0
      ? setMasquerDroit({ visibility: "hidden" })
      : setMasquerDroit({ visibility: "visible" });
  };

  const boutonGaucheHandler = () => {
    let newPosition = position;
    if (position> -(n + 2)) 
      newPosition = position-1;
    setPosition(newPosition);
    setStyle({
      ...style,
      width: newPosition* 50 + "%",
      transform: "translate(" + newPosition * 25 + "%)",
      transition: "all 0.5s ease",
    })
    
    afficher_masquer(newPosition);
  };

  const boutonDroitHandler = () => {
    let newPosition = position;
    if (position< 0) 
      newPosition = position+1;
    setPosition(newPosition);
    setStyle({
      ...style,
      width: Math.abs(newPosition * 50 + "%"),
      transform: "translate(" + newPosition * 25 + "%)",
      transition: "all 0.5s ease",
    })
    
    afficher_masquer(newPosition);
  };
  const consulter = (actualite) => {
    setCurrentActualite(actualite);
    setOpenConsult(true);
  };
  const handleCloseConsult = () => {
    setCurrentActualite(null);
    setOpenConsult(false);
  };
  return (
    <div className={classes.Ac}>
      <div className={classes.BlocHeaderActu}>
        <RubriqueTitle>Actualités</RubriqueTitle>
        <div>
          <img
            src={chevronGauche}
            alt="chevron gauche"
            className={classes.Chevron}
            id="chevronGauche"
            style={masquerGauche}
            onClick={boutonGaucheHandler}
          />
          <img
            src={chevronDroit}
            alt="chevron droit"
            className={classes.Chevron}
            id="chevronDroit"
            style={masquerDroit}
            onClick={boutonDroitHandler}
          />
        </div>
      </div>

      <div style={style}>
        {Data_Actu.map((actu) => (
          <ActualiteItem
            loading={loading}
            key={actu.idEvent}
            title={actu.title}
            theme={actu.theme}
            description={actu.description}
            action={() => consulter(actu)}
          />
        ))}
        {openConsult && (
          <ConsultEvent
            event={currentActualite}
            open={openConsult}
            handleToggle={() => handleCloseConsult()}
          />
        )}
      </div>
    </div>
  );
};

export default Actualite;

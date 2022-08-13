import React from "react";
import Aux from "../../../hoc/_Aux/_Aux";
import classes from "./Presentation.css";

const Presentation = () => {
  return (
    <Aux>
      <div className={classes.Presentation}>
        <h2>Presentation de l'ASEBEM</h2>
        <p>
          <strong>
            L'Association des Stagiaires et Etudiants Béninois au Maroc
          </strong>{" "}
          est l'association rassemblant l'ensemble du corps estudiantin des
          Béninois vivant au Maroc. Elle a été créé conformément au Dahir du
          1.58.376 du Joumada I 1375 (Novembre 1958) règlementant droit et
          association tel qu'il est modifié par le dahir loi n°1.73. 283 du 6
          Rabia I 1393 (10 avril 1973). Existant depuis le{" "}
          <strong>21 Août 1994</strong>, elle a été créée afin de rassembler
          l'ensemble des étudiants Béninois au Maroc et agir activement dans la
          résolution des différents problèmes rencontrées sur les plans
          socio-économique, académique et relationnel. 
          Durant son parcours elle a su bénéficier de l'accompagnement de{" "}
          <strong>l'Ambassade du Bénin auprès du Maroc</strong>, de{" "}
          <strong>l'Agence Marocaine de la Coopération Internationale</strong>,
          de la Communauté des Béninois au Maroc <strong></strong>et de
          plusieurs autres partenaires.
          En tant qu'association, elle est subdivisées en plusieurs cellules de
          villes, toutes rassemblées au sein de l'ASEBEM National basé à Rabat.
        </p>
        <p>Parmis ses activités phares nous pouvons citer :</p>
        <ul>
          <li>L'accueil des nouveaux étudiants venus au Maroc</li>
          <li>
            L'organisation de différentes activités socio culturelles et
            éducatives
          </li>
        </ul>
      </div>
    </Aux>
  );
};
export default Presentation;

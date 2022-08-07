import React, { Component } from "react";
import classes from "./Actualitee.css";
import chevronGauche from "../../../assets/images/chevron-gauche.png";
import chevronDroit from "../../../assets/images/chevron-droit.png";
import ActualiteItem from "./ActualiteItem/ActualiteItem";
import RubriqueTitle from "../../../components/UI/RubriqueTitle/RubriqueTitle";
import ConsultEvent from "../../Evenements/ConsultEvent/ConsultEvent";


class Actualite extends Component {

  description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  Bouton_Actu = {
    width: "75px",
    titre: "Voir +",
  };
  Data_Actu = this.props.actualites
  state = {
    currentActualite:null,
    openConsult:null,
    style: {
      width: this.Data_Actu.length * 50 + "%",
      display: "flex",
      flexDirection: "row",
    },
    masquerGauche: {
      visibility: "",
    },
    masquerDroit: {
      visibility: "",
    },
  };
  n = this.Data_Actu.length;
  p = 0;
  
  afficher_masquer = () => {
    this.p === -this.n + 2
      ? this.setState({ masquerGauche: { visibility: "hidden" } })
      : this.setState({ masquerGauche: { visibility: "visible" } });
    this.p === 0
      ? this.setState({ masquerDroit: { visibility: "hidden" } })
      : this.setState({ masquerDroit: { visibility: "visible" } });
  };

  boutonGaucheHandler = () => {
    if (this.p > -(this.n + 2)) this.p--;

    this.setState({
      style: {
        width: this.p * 50 + "%",
        display: "flex",
        flexDirection: "row",
        transform: "translate(" + this.p * 25 + "%)",
        transition: "all 0.5s ease",
      },
    });
    this.afficher_masquer();
  };

  boutonDroitHandler = () => {
    if (this.p < 0) this.p++;

    this.setState({
      style: {
        width: Math.abs(this.p * 50 + "%"),
        display: "flex",
        flexDirection: "row",
        transform: "translate(" + this.p * 25 + "%)",
        transition: "all 0.5s ease",
      },
    });
    this.afficher_masquer();
  };
  consulter = (actualite) => {
    this.setState({currentActualite:actualite})
    this.setState({openConsult:true})
  }
  handleCloseConsult = () => {
    this.setState({currentActualite:null})
    this.setState({openConsult:false})
  }
  render() {
    return (
      <div className={classes.Ac}>
        <div className={classes.BlocHeaderActu}>
          <RubriqueTitle>
              Actualités
          </RubriqueTitle>
          <div>
            <img
              src={chevronGauche}
              alt="chevron gauche"
              className={classes.Chevron}
              id="chevronGauche"
              style={this.state.masquerGauche}
              onClick={this.boutonGaucheHandler}
            />
            <img
              src={chevronDroit}
              alt="chevron droit"
              className={classes.Chevron}
              id="chevronDroit"
              style={this.state.masquerDroit}
              onClick={this.boutonDroitHandler}
            />
          </div>
        </div>

        <div style={this.state.style}>
          {this.Data_Actu.map((actu) => (
            <ActualiteItem
              key={actu.id}
              title={actu.title}
              theme={actu.theme}
              description={actu.description}
              titreBouton={"Voir +"}
              action={() => this.consulter(actu)}
            />
          ))}
          {this.state.openConsult && (
              <ConsultEvent
                event={this.state.currentActualite}
                open={this.state.openConsult}
                handleToggle={() => this.handleCloseConsult()}
              />
            )}
        </div>
      </div>
    );
  }
}

export default Actualite;

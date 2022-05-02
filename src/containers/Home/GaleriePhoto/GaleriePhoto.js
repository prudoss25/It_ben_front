import React, { Component } from "react";
import chevronGauche from "../../../assets/images/chevron-gauche.png";
import chevronDroit from "../../../assets/images/chevron-droit.png";
import classes from "./GaleriePhoto.css";

class GaleriePhoto extends Component {
  Data_Photo = [
    { image: "https://picsum.photos/1000/450?1" },
    { image: "https://picsum.photos/1000/450?2" },
    { image: "https://picsum.photos/1000/450?3" },
    { image: "https://picsum.photos/1000/450?4" },
    { image: "https://picsum.photos/1000/450?5" },
    { image: "https://picsum.photos/1000/450?6" },
  ];

  state = {
    style: {
      width: this.Data_Photo.length + "px",
      height: "450px",
      display: "flex",
      flexDirection: "row",
    },
    masquerGauche: {
      visibility: "",
    },
    masquerDroit: {
      visibility: "hidden",
    },
  };
  n = this.Data_Photo.length;
  p = 0;
  afficher_masquer = () => {
    this.p === -this.n + 1
      ? this.setState({ masquerGauche: { visibility: "hidden" } })
      : this.setState({ masquerGauche: { visibility: "visible" } });
    this.p === 0
      ? this.setState({ masquerDroit: { visibility: "hidden" } })
      : this.setState({ masquerDroit: { visibility: "visible" } });
  };

  boutonGaucheHandler = () => {
    if (this.p > -this.n + 1) this.p--;

    this.setState({
      style: {
        width: this.p + "px",
        height: "450px",
        display: "flex",
        flexDirection: "row",
        transform: "translate(" + this.p * 1000 + "px)",
        transition: "all 0.5s ease",
      },
    });
    this.afficher_masquer();
  };

  boutonDroitHandler = () => {
    if (this.p < 0) this.p++;

    this.setState({
      style: {
        width: this.p + "px",
        height: "450px",
        display: "flex",
        flexDirection: "row",
        transform: "translate(" + this.p * 1000 + "px)",
        transition: "all 0.5s ease",
      },
    });
    this.afficher_masquer();
  };

  render() {
    return (
      <section>
        <div className={classes.titreGalerie}>
          <h1>Galerie Photo</h1>
        </div>
        <div id={classes.carousel}>
          <div style={this.state.style}>
            {this.Data_Photo.map((photo, index) => (
              <div className={classes.image} key={index}>
                <img src={photo.image} alt="photo_carousel" />
              </div>
            ))}
          </div>
          <img
            src={chevronGauche}
            alt="chevronGauche"
            style={this.state.masquerGauche}
            className={classes.chevron}
            id={classes.gauche}
            onClick={this.boutonGaucheHandler}
          />
          <img
            src={chevronDroit}
            alt="chevronDroit"
            style={this.state.masquerDroit}
            className={classes.chevron}
            id={classes.droit}
            onClick={this.boutonDroitHandler}
          />
        </div>
      </section>
    );
  }
}

export default GaleriePhoto;

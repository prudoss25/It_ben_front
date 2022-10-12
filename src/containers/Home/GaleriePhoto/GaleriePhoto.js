import React, { Component, useState } from "react";
import chevronGauche from "../../../assets/images/chevron-gauche.png";
import chevronDroit from "../../../assets/images/chevron-droit.png";
import classes from "./GaleriePhoto.css";
import { ImageList, ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";
import image1 from "../../../assets/images/gallery/image1.jpeg";
import image2 from "../../../assets/images/gallery/image2.png";
import image3 from "../../../assets/images/gallery/image3.jpeg";
import image4 from "../../../assets/images/gallery/image4.jpeg";
import image5 from "../../../assets/images/gallery/image5.jpeg";
import image6 from "../../../assets/images/gallery/image6.jpeg";
import image7 from "../../../assets/images/gallery/image7.JPG";
import image8 from "../../../assets/images/gallery/image8.JPG";
import image9 from "../../../assets/images/gallery/image9.JPG";
import image10 from "../../../assets/images/gallery/image10.JPG";
import image11 from "../../../assets/images/gallery/image11.jpeg";
import image12 from "../../../assets/images/gallery/image12.jpeg";
import image13 from "../../../assets/images/gallery/image13.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginBottom:'8px',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const GaleriePhoto = () => {
  // const Data_Photo = [
  //   { img: "https://picsum.photos/1000/450?1", title:"Image 1" },
  //   { img: "https://picsum.photos/1000/450?2", title:"Image 2" },
  //   { img: "https://picsum.photos/1000/450?3", title:"Image 3" },
  //   { img: "https://picsum.photos/1000/450?4", title:"Image 4" },
  //   { img: "https://picsum.photos/1000/450?5", title:"Image 5" },
  //   { img: "https://picsum.photos/1000/450?6", title:"Image 6" },
  // ];
  const Data_Photo = [
    { img: image1, title:"Image 1" },
    { img: image12, title:"Accueil des nouveaux" },
    { img: image9, title:"Image 9" },
    { img: image2, title:"Image 2" },
    { img: image3, title:"Image 3" },
    { img: image10, title:"Image 10" },
    { img: image11, title:"Image 11" },
    { img: image13, title:"Accueil des nouveaux" },
    { img: image5, title:"Image 5" },
    { img: image6, title:"Image 6" },
    { img: image7, title:"Image 7" },
    { img: image8, title:"Image 8" },
    { img: image4, title:"Image 4" },
  ];
  const [style, setStyle] = useState({
    width: Data_Photo.length + "px",
    height: "450px",
    display: "flex",
    flexDirection: "row",
  })
  const [masquerGauche, setMasquerGauche] = useState({
    visibility: "",
  })
  const [masquerDroit, setMasquerDroit] = useState({
    visibility: "",
  })
  // state = {
  //   style: {
  //     width: this.Data_Photo.length + "px",
  //     height: "450px",
  //     display: "flex",
  //     flexDirection: "row",
  //   },
  //   masquerGauche: {
  //     visibility: "",
  //   },
  //   masquerDroit: {
  //     visibility: "hidden",
  //   },
  // };
  // n = this.Data_Photo.length;
  // p = 0;
  // afficher_masquer = () => {
  //   this.p === -this.n + 1
  //     ? this.setState({ masquerGauche: { visibility: "hidden" } })
  //     : this.setState({ masquerGauche: { visibility: "visible" } });
  //   this.p === 0
  //     ? this.setState({ masquerDroit: { visibility: "hidden" } })
  //     : this.setState({ masquerDroit: { visibility: "visible" } });
  // };
  // boutonGaucheHandler = () => {
  //   if (this.p > -this.n + 1) this.p--;
  //   this.setState({
  //     style: {
  //       width: this.p + "px",
  //       height: "450px",
  //       display: "flex",
  //       flexDirection: "row",
  //       transform: "translate(" + this.p * 1000 + "px)",
  //       transition: "all 0.5s ease",
  //     },
  //   });
  //   this.afficher_masquer();
  // };
  // boutonDroitHandler = () => {
  //   if (this.p < 0) this.p++;
  //   this.setState({
  //     style: {
  //       width: this.p + "px",
  //       height: "450px",
  //       display: "flex",
  //       flexDirection: "row",
  //       transform: "translate(" + this.p * 1000 + "px)",
  //       transition: "all 0.5s ease",
  //     },
  //   });
  //   this.afficher_masquer();
  // };
  // render() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={4.5} >
        {Data_Photo.map((item) => (
          <ImageListItem key={item.img} style={{height:'400px'}}>
            <img src={item.img} alt={item.title} style={{objectFit:"cover"}} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>

      // <section>
      //   <div className={classes.titreGalerie}>
      //     <h1>Galerie Photo</h1>
      //   </div>
      //   <div id={classes.carousel}>
      //     <div style={this.state.style}>
      //       {this.Data_Photo.map((photo, index) => (
      //         <div className={classes.image} key={index}>
      //           <img src={photo.image} alt="photo_carousel" />
      //         </div>
      //       ))}
      //     </div>
      //     <img
      //       src={chevronGauche}
      //       alt="chevronGauche"
      //       style={this.state.masquerGauche}
      //       className={classes.chevron}
      //       id={classes.gauche}
      //       onClick={this.boutonGaucheHandler}
      //     />
      //     <img
      //       src={chevronDroit}
      //       alt="chevronDroit"
      //       style={this.state.masquerDroit}
      //       className={classes.chevron}
      //       id={classes.droit}
      //       onClick={this.boutonDroitHandler}
      //     />
      //   </div>
      // </section>
    );
  // }
}

export default GaleriePhoto;

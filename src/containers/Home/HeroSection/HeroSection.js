import React from "react";
import Button from "../../../components/UI/Button/Button";
import { useHistory } from "react-router-dom";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import heroImage from "../../../assets/images/cover_asebem.png";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    width: "100%",
    height: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "contain",
    backgroundImage: `url(${heroImage})`,
  },
  heroTitre: {
    color: "#fff",
    fontSize: 48,
    marginBottom: "-5px",
    marginTop: "-2px"
  },
  featureBlock: {
    backgroundColor: "hsl(176, 85%, 28%,50%)",
    textAlign: "center",
    width: "48%",
    height: "40%",
    borderRadius: "32px",
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(192,192,192,0.3)',
  },
  mainFeaturedPostContent: {
    width:"100%",
    textAlign:"center",
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

const heroSection = (props) => {
  const history = useHistory()
  const classes = useStyles();
  return (
    <Paper className={classes.mainFeaturedPost}>
          <div className={classes.featureBlock}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom className={classes.heroTitre}>
              Association des Etudiants et Stagiaires Béninois au Maroc
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Nous vous souhaitons la bienvenue sur le site internet de l'ASEBEM
            </Typography>
            <Button action={() => {history.push("/about")}}>En savoir plus</Button>
          </div>
    </Paper>
    // <Aux>
    //   <div className={classes.HeroSection}>
    //     <div className={classes.HeroBloc}>
    //       <p className={classes.HeroTitre}>
    //         Association des Etudiants et Stagiaires Béninois au Maroc 
    //       </p>
    //       <p className={classes.HeroText}>
    //         Nous vous souhaitons la bienvenu sur notre plateforme ASEBEM Book
    //       </p>
    //       <Button action={() => {history.push("/about")}}>En savoir plus</Button>
    //     </div>
    //   </div>
    // </Aux>
  );
};

export default heroSection;

import React from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Concepteur from "./Concepteurs/Concepteur";
import EquipeDirigeante from "./EquipeDirigeante/EquipeDirigeante";
// import Mots from "./Mots/Mots";
import Presentation from "./Presentation/Presentation";
// import classes from "./About.css";
import statuts from "../../assets/files/STATUTS_ASEBEM_2019_version_officielle.pdf";
import guide from "../../assets/files/GUIDE_DES_BENINOIS_AU_MAROC_COBEM.pdf";
import { Button, Grid} from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";


const About = (props) => {
  const files = [
    {
      name: "Statuts de l'ASEBEM",
      file: statuts,
    },
    {
      name: "Guide du Béninois Au Maroc (COBEM)",
      file: guide,
    },
  ];
  return (
    <Aux>
      <Grid container justifyContent="space-around">
        {files.map((file) => {
          return (
            <Grid key={file.name} item>
              <a
                style={{ textDecoration: "none" }}
                target="_blank"
                href={file.file}
              >
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<GetAppIcon />}
                >
                  {file.name}
                </Button>
              </a>
            </Grid>
          );
        })}
      </Grid>
      <Presentation />
      <EquipeDirigeante />
      {/* <div className={classes.Mots}>
        <Mots titre="Mot de l'Ambassade" auteur="Serge Dagnon" />
        <Mots titre="Mot du CC" auteur="DOSSOU Prudence" />
      </div> */}
      <Concepteur />
    </Aux>
  );
};

export default About;

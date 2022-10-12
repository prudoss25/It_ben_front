import {
  Grid,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import React, { Component } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Formulaire from "./Formulaire/Formulaire";

import AdresseMail from "./ContactezNous/AdresseMail/AdresseMail";
import ReseauxSociaux from "./ContactezNous/ReseauxSociaux/ReseauxSociaux";
import Telephone from "./ContactezNous/Telephone/Telephone";

class Contacts extends Component {
  render() {
    return (
      <Aux>
        <Grid>
          <Card>
            <CardHeader
              titleTypographyProps={{align:"center"}}
              subheaderTypographyProps={{align:"center"}}
              title="Contactez-Nous"
              subheader="Ci-joint les différents canaux par lesquels nous sommes
        joignables. N'hésitez pas à nous joindre ou nous envoyer un
        message via le formulaire."
            />
            <CardContent>
              <Grid container justifyContent="space-around">
                <AdresseMail />
                <Telephone />
                <ReseauxSociaux />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid style={{ padding: "20px 5px" }}>
          <Formulaire />
        </Grid>
      </Aux>
    );
  }
}

export default Contacts;

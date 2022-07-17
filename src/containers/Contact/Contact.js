import { Grid, Typography, Card, CardContent} from "@material-ui/core";
import React, { Component } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import Formulaire from "./Formulaire/Formulaire";

import AdresseMail from "./ContactezNous/AdresseMail/AdresseMail";
import ReseauxSociaux from "./ContactezNous/ReseauxSociaux/ReseauxSociaux";
import Telephone from "./ContactezNous/Telephone/Telephone";

class Contacts extends Component {
   render(){
    return(
        <Aux>
            <Grid>
                <Card >
                    <CardContent>
                            <Typography gutterBottom variant="h4">
                                Contactez-Nous
                            </Typography>
                            
                            <Typography gutterBottom variant="body1 " color="textSecondary" component="p" >
                                Ci-joint les différents canaux par lesquels nous sommes joignables.
                                N'hésitez pas à nous joindre ou nous envoyer un message via le formulaire.
                            </Typography>
                        <Grid  style={{  padding: "20px 5px" }} container spacing={1}>
                            <Grid xs={12} sm={4} item>
                                <AdresseMail/>
                            </Grid>
                            <Grid xs={12} sm={4} item>
                                <Telephone/>
                            </Grid>
                            <Grid xs={12} sm={4} item>
                                <ReseauxSociaux/>
                            </Grid>
                        </Grid>
                        
                    </CardContent>
                </Card>
                
            </Grid>
            <Grid style={{  padding: "20px 5px" }} >
                <Formulaire/>
            </Grid>
            
           
        </Aux>
    );
   }
    
}

export default Contacts;
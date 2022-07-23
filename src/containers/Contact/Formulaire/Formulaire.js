import React from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Aux from "../../../hoc/_Aux/_Aux";


function Formulaire() {


  return (
    <Aux > 
      <Grid>
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Laissez nous un message
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Nous vous feront un retour le plus tôt possible. Merci d'être précis!
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Entrez votre prénom" label="Prenom" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Entrez votre nom" label="Nom" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Entrez votre adresse email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Entrez votre numero de telephone" label="Téléphone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Ecrivez votre message ici" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Envoyez</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Aux>
  );
}

export default Formulaire;
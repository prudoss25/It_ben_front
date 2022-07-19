import React from "react";
import Aux from "../../../../hoc/_Aux/_Aux";
import { Grid, Container, Typography} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
     
      color: '#D72F2F',
      
    },
  });
  export default function AdresseMail() {
    const classes = useStyles();
    return (
        <Aux>
            <Grid  container item xs={12} spacing={3}>
               <Container>
                        <Typography className={classes.root} gutterBottom variant="h5">
                            <MailIcon/>
                            Adresses mails
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <ul>
                                <li>mailasebem@gmail.com</li>
                                <li>mailcc@gmail.com</li>
                            </ul>
                        </Typography>
               </Container>
            </Grid>
        </Aux>
    )
}

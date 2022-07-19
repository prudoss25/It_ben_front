import React from "react";
import Aux from "../../../../hoc/_Aux/_Aux";
import { Grid, Container, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
     
      color: '#D72F2F',
      
    },
    list : {
        
        color:'black',
    },
    
  });
  export default function ReseauxSociaux() {
    const classes = useStyles();
    return (
        <Aux>
            <Grid container item xs={12} spacing={3}>
                <Container>
                        
                            <Typography  className={classes.root} gutterBottom variant="h5">
                                <LanguageIcon/>
                                    Nos Reseaux Sociaux
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <ul className={classes.list}>
                                    <li><a href='/'><FacebookIcon/> Facebook</a></li>
                                    <li><a href='/'><InstagramIcon/>Instagram</a></li>
                                    <li><a href='/'><LinkedInIcon/>LinkedIn</a></li>
                                </ul>
                            </Typography>
                        
                </Container>
            </Grid>
        </Aux>
    )
}

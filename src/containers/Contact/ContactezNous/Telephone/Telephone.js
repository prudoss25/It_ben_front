import React from "react";
import Aux from "../../../../hoc/_Aux/_Aux";
import { Grid, Container, Typography} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
     
      color: '#D72F2F',
      
    },
  });
  export default function Telephone() {
    const classes = useStyles();
    return (
        <Aux>
            <Grid container item xs={12} spacing={3}>
                <Container>
                        
                            <Typography  className={classes.root}  gutterBottom variant="h5">
                                <PhoneIcon/>
                                Téléphone
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                <ul>
                                    <li>060000000</li>
                                    <li>061111111</li>
                                    <li>062222222</li>
                                </ul>
                            </Typography>
                      
                </Container>
            </Grid>
        </Aux>
    )
}

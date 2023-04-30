import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, List, makeStyles, ListItem, ListItemIcon, ListItemText, Chip, CardHeader } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import { getService } from '../../features/actions/Service/ServiceAction';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  couvertureGeographique: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
}));
const ServiceDetails = () => {
  const classes = useStyles();
  const { idService } = useParams();
  const [service, setService] = useState(null);
  const currentService = useSelector((state) => state.service.currentService)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getService(idService))
  },[])


  const [entrepreneurContacts,couvertureGeographique] = useMemo(() => {
    var contacts = [];
    var couverture = [];
    if(service != null)
    {
      if(service.facebook)
      {
        contacts = [...contacts, {name:"Facebook",link:service.facebook, icon:<FacebookIcon color='primary'/>}]
      }
      if(service.whatsapp)
      {
        contacts = [...contacts, {name:"Whatsapp",link:service.whatsapp, icon:<WhatsAppIcon htmlColor='green'/>}]
      }
      if(service.instagram)
      {
        contacts = [...contacts, {name:"Instagram",link:service.instagram, icon:<InstagramIcon htmlColor='red'/>}]
      }
      if(service.siteInternet)
      {
        contacts = [...contacts, {name:"Site Internet",link:service.siteInternet, icon:<LanguageIcon />}]
      }

      if(service.couvertureGeographique && [...service.couvertureGeographique].length > 0)
      {
        if([...service.couvertureGeographique].includes("All"))
        {
          couverture = ["Partout au Maroc"]
        }
        else{
          couverture = [...service.couvertureGeographique]
        }
      }
    }

    return [contacts,couverture];
  },[service])
  useEffect(() => {
    if(currentService)
    {
      setService(currentService)
    }
  },[currentService])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {service && (
          <Card>
            <CardMedia
              component="img"
              image={service.imageUrl}
              alt={service.title}
            />
            <CardContent>
              <Typography variant="h5">{service.title}</Typography>
              <Typography variant="body1">{service.description}</Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
      <Grid item xs={12} md={4}>
        {
          service &&
          <Card>
            <CardHeader 
              title={
                <Typography variant="h6">
                {service.entrepreneur.userName||''}
                </Typography>}
              />
            <CardContent>
              {
                  couvertureGeographique && couvertureGeographique.length > 0 &&
                  <List
                    component="nav"
                    subheader={
                      <Typography variant="h7">
                        Couverture au Maroc
                      </Typography>
                    }
                    className={classes.root}
                  >
                    {
                    <ListItem className={classes.couvertureGeographique}>
                      {couvertureGeographique.map(couverture => (
                        <Chip label={couverture}/>
                      ))}
                    </ListItem>
                    }
                </List>
              }
              {entrepreneurContacts && entrepreneurContacts.length > 0 &&
              <List
                  component="nav"
                  subheader={
                    <Typography variant="h7">
                      Contacts
                    </Typography>
                  }
                  className={classes.root}
                >
                  {
                    entrepreneurContacts.map(contact => (
                      <ListItem key={contact.name} button component="a" target="_blank" href={contact.link}>
                        <ListItemIcon>
                          {contact.icon}
                        </ListItemIcon>
                        <ListItemText primary={contact.name} />
                      </ListItem>
                    ))
                  }
              </List>
              }
              
            </CardContent>
          </Card>
        }
      </Grid>
    </Grid>
  );
};

export default ServiceDetails;

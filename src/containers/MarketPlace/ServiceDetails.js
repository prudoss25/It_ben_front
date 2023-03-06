import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
//import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Grid } from "@material-ui/core";
//import { styled } from '@material-ui/core/styles';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [entrepreneur, setEntrepreneur] = useState(null);

  useEffect(() => {
    const service1 = {
      'id':'1',
      'title' : 'aaaa', 
      'description' : 'Dis erat, platea sagittis. Curae; praesent elit habitasse fermentum sit faucibus duis ut turpis parturient iaculis molestie. Vitae fermentum per eleifend curae; luctus elit quam maecenas praesent morbi. Nisl consectetur scelerisque praesent ligula sociosqu quisque inceptos ut fringilla imperdiet, parturient placerat. Turpis at congue duis viverra tincidunt placerat mus leo! Dignissim lacinia porttitor quis etiam rutrum purus hac tristique scelerisque.', 
      'category' : 'categorie1',
      'dateAdded' : "02-02-2002",
      'image' : 'https://media.gettyimages.com/id/541851452/fr/photo/rabat-avenue-mohammed-v.jpg?s=612x612&w=gi&k=20&c=9qwYuBdczOVJhKH2kOrsbsTOOFkXRixJDOCKyn6vWSE='
    };
     
    const entrepreneur = { 
      'name' : "aaa",
      'bio' : 'aaaaaa', 
      'imageUrl' : 'https://media.gettyimages.com/id/541851452/fr/photo/rabat-avenue-mohammed-v.jpg?s=612x612&w=gi&k=20&c=9qwYuBdczOVJhKH2kOrsbsTOOFkXRixJDOCKyn6vWSE=',
      'email' : 'aaa@gmail.com',
      'phoneNumber' : '0222555', 
      'location' : "Rabat"
    };

    setService(service1);
    setEntrepreneur(entrepreneur);
  }, [id]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        {service && (
          <Card>
            <CardMedia
              component="img"
              image={service.image}
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
        {entrepreneur && (
          <Card>
            <CardContent>
              <Typography variant="h6">Vendu par</Typography>
              <Typography variant="h5">{entrepreneur.name}</Typography>
              <Typography variant="body1">{entrepreneur.bio}</Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default ServiceDetails;

import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { Container, Grid } from '@material-ui/core';
import Service from './ServiceCards';

const MarketPlaces = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {



    // const fetchServices = async () => {
    //   const result = await axios.get('https://example.com/api/services');
    //   setServices(result.data);
    // };
    // fetchServices();



    const service1= {'id':'1','title' : 'aaaa', 
    'description' : 'Dis erat, platea sagittis. Curae; praesent elit habitasse fermentum sit faucibus duis ut turpis parturient iaculis molestie. Vitae fermentum per eleifend curae; luctus elit quam maecenas praesent morbi. Nisl consectetur scelerisque praesent ligula sociosqu quisque inceptos ut fringilla imperdiet, parturient placerat. Turpis at congue duis viverra tincidunt placerat mus leo! Dignissim lacinia porttitor quis etiam rutrum purus hac tristique scelerisque.', 
    'category' : 'categorie1',
    'dateAdded' : "02-02-2002",
     'image' : 'https://media.gettyimages.com/id/541851452/fr/photo/rabat-avenue-mohammed-v.jpg?s=612x612&w=gi&k=20&c=9qwYuBdczOVJhKH2kOrsbsTOOFkXRixJDOCKyn6vWSE='}
     const service12= {'title' : 'aaaa', 'description' : 'Dis erat, platea sagittis. Curae; praesent elit habitasse fermentum sit faucibus duis ut turpis parturient iaculis molestie. Vitae fermentum per eleifend curae; luctus elit quam maecenas praesent morbi. Nisl consectetur scelerisque praesent ligula sociosqu quisque inceptos ut fringilla imperdiet, parturient placerat. Turpis at congue duis viverra tincidunt placerat mus leo! Dignissim lacinia porttitor quis etiam rutrum purus hac tristique scelerisque.', 
    'category' : 'categorie1',
    'dateAdded' : "02-02-2002",
     'image' : 'https://media.gettyimages.com/id/541851452/fr/photo/rabat-avenue-mohammed-v.jpg?s=612x612&w=gi&k=20&c=9qwYuBdczOVJhKH2kOrsbsTOOFkXRixJDOCKyn6vWSE='}
     
     const service2= {'id':'4','title' : 'bbbbba', 'description' : 'empus volutpat dis fermentum dictum suscipit fringilla ut arcu mauris fringilla parturient aptent. Posuere facilisi sapien laoreet facilisi nisi vestibulum pharetra volutpat ipsum erat in. Taciti condimentum cursus dignissim. Maecenas bibendum luctus sed neque ornare magna nullam torquent. Inceptos congue cursus, vel quam fusce vivamus! Etiam urna sollicitudin malesuada sem sem luctus erat.', 
     'category' : 'categorie2',
     'dateAdded' : "02-02-2002",
      'image' : 'https://www.shutterstock.com/image-photo/sunset-above-rabat-bou-regreg-260nw-593548961.jpg'}

      const service0= {'id':'4','title' : 'bbbbba', 'description' : 'empus volutpat dis fermentum dictum suscipit fringilla ut arcu mauris fringilla parturient aptent. Posuere facilisi sapien laoreet facilisi nisi vestibulum pharetra volutpat ipsum erat in. Taciti condimentum cursus dignissim. Maecenas bibendum luctus sed neque ornare magna nullam torquent. Inceptos congue cursus, vel quam fusce vivamus! Etiam urna sollicitudin malesuada sem sem luctus erat.', 
     'category' : 'categorie2',
     'dateAdded' : "02-02-2002",
      'image' : 'https://www.shutterstock.com/image-photo/sunset-above-rabat-bou-regreg-260nw-593548961.jpg'}
     const data = [service12,service1, service2, service0]
    setServices(data);


  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Service service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MarketPlaces;
